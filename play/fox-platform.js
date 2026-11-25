/* Platform shell shared by itch.io and Yandex Games. No SDK or advertising on itch. */
(function (host) {
  'use strict';
  const settings = host.FoxDistribution;
  const languages = ['en', 'ru', 'ja', 'sr'];
  let sdk, instance, objectName, uiReady = false, readySent = false;
  let desiredGameplay = false, reportedGameplay = false, sdkPaused = false;
  let lastUnityPause;
  let interstitialPending = false;
  const normalize = value => String(value || '').toLowerCase().split(/[-_]/)[0];
  const paused = () => sdkPaused || document.hidden || interstitialPending;
  function updateGameplay() {
    const active = readySent && desiredGameplay && !paused();
    if (!sdk || active === reportedGameplay) return;
    reportedGameplay = active;
    if (active) sdk.features.GameplayAPI.start();
    else sdk.features.GameplayAPI.stop();
  }
  function syncPause() {
    const value = paused();
    if (instance && objectName && lastUnityPause !== value) {
      lastUnityPause = value;
      instance.SendMessage(objectName, 'SetPaused', value ? '1' : '0');
    }
    updateGameplay();
  }
  function finishLoading() {
    if (!instance || !uiReady || readySent) return;
    readySent = true;
    document.getElementById('loading').hidden = true;
    // The Unity frame is ready. Let the browser paint the canvas before reporting ready.
    host.requestAnimationFrame(() => {
      if (sdk) sdk.features.LoadingAPI.ready();
      syncPause();
    });
  }
  const api = host.FoxPlatform = {
    language: settings.defaultLanguage,
    async initialize() {
      if (settings.platform === 'yandex') {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = '/sdk.js'; // Official relative endpoint for archives hosted by Yandex.
          script.onload = resolve;
          script.onerror = () => reject(new Error('Не удалось загрузить SDK Яндекс Игр. Откройте игру через Яндекс Игры и обновите страницу.'));
          document.head.appendChild(script);
        });
        sdk = await host.YaGames.init();
        const language = normalize(sdk.environment.i18n.lang);
        api.language = languages.includes(language) ? language : settings.defaultLanguage;
        sdk.on('game_api_pause', () => { sdkPaused = true; syncPause(); });
        sdk.on('game_api_resume', () => { sdkPaused = false; syncPause(); });
      }
      document.documentElement.lang = api.language;
      document.addEventListener('visibilitychange', syncPause);
    },
    register(name) { objectName = name; syncPause(); },
    attach(player) { instance = player; syncPause(); finishLoading(); },
    markUIReady() { uiReady = true; finishLoading(); },
    setGameplay(active) { desiredGameplay = active; updateGameplay(); },
    betweenGames(requestId) {
      // Only a user-requested transition after a completed game reaches here.
      // Yandex controls the frequency; never queue a delayed ad during play.
      if (interstitialPending) return;
      const complete = () => instance.SendMessage(objectName, 'InterstitialClosed', requestId);
      if (!sdk || !sdk.adv || typeof sdk.adv.showFullscreenAdv !== 'function') {
        complete(); return;
      }
      interstitialPending = true;
      desiredGameplay = false;
      syncPause();
      let finished = false;
      const finish = () => {
        if (finished) return;
        finished = true;
        interstitialPending = false;
        syncPause(); // A hidden tab or SDK pause still keeps Unity paused.
        complete();
      };
      try {
        sdk.adv.showFullscreenAdv({ callbacks: {
          onOpen: () => { if (!finished) syncPause(); },
          onClose: finish, // Also called when the platform skips a frequent request.
          onError: finish
        } });
      } catch (_) { finish(); }
    }
  };
})(window);
