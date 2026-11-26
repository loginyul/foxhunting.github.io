"use strict";
const translations = {
  "ru": {
    "skip": "К содержимому",
    "allProjects": "Все проекты автора",
    "eyebrow": "ЛОГИЧЕСКАЯ ГОЛОВОЛОМКА",
    "title": "Каждый желает знать,<br>где сидит <em>лиса</em>",
    "lead": "У каждой клетки есть подсказка.<br>У каждой лисы — своё укрытие.<br>Соедините факты и найдите их всех.",
    "play": "Играть в браузере",
    "load": "Бесплатно · без установки<br>Первая загрузка — около 31 МБ",
    "caption": "Охота на лис / Fox Hunting",
    "howLabel": "КАК ИГРАТЬ",
    "howTitle": "Смотрите дальше<br> соседних клеток.",
    "rule1": "Откройте клетку: число покажет, сколько ещё не найденных лис видно по строке, столбцу и диагоналям — в восьми направлениях.",
    "rule2": "Сопоставляйте подсказки, ставьте пометки и используйте прожекторы. Когда вы находите лису, числа на поле меняются.",
    "rule3": "Начните с быстрой игры или проходите задания. Правила, настройки и выбор языка доступны внутри игры.",
    "insideLabel": "ОТ ПРОСТОГО К НЕОЖИДАННОМУ",
    "insideTitle": "Логика с характером.",
    "inside1": "Зеркала меняют направление лучей, а камни и лес влияют на обзор. Лисы бывают цветными и прячутся целыми семьями.",
    "inside2": "Попробуйте разные условия и найдите свой способ читать поле.",
    "start": "Начать игру",
    "inputNote": "<strong>Мышь или касание.</strong> Интерфейс подстраивается под размер экрана. На небольшом экране попробуйте горизонтальное положение.",
    "saveNote": "<strong>Прогресс в этом браузере.</strong> Продолжайте игру на том же устройстве. Очистка данных сайта или приватный режим могут удалить сохранения.",
    "privacy": "Конфиденциальность",
    "font": "Лицензия шрифта",
    "pageTitle": "Охота на лис — играть в браузере",
    "description": "Логическая головоломка «Охота на лис»: ищите спрятавшихся лис по числовым подсказкам. Играйте бесплатно прямо в браузере.",
    "coverAlt": "Лисы на клетчатом поле, числовые подсказки и лучи",
    "screenshotAlt": "Игровой экран «Охоты на лис» с числовыми подсказками и панелью управления",
    "before": "Перед началом"
  },
  "sr": {
    "skip": "Пређи на садржај",
    "allProjects": "Сви пројекти ауторке",
    "eyebrow": "ЛОГИЧКА СЛАГАЛИЦА",
    "title": "Свако жели да зна<br>где се крије <em>лисица</em>",
    "lead": "Свако поље крије траг.<br>Свака лисица има своје скровиште.<br>Повежите чињенице и пронађите их све.",
    "play": "Играј у прегледачу",
    "load": "Бесплатно · без инсталације<br>Прво учитавање — око 31 MB",
    "caption": "Лов на лисице / Fox Hunting",
    "howLabel": "КАКО СЕ ИГРА",
    "howTitle": "Гледајте даље<br> од суседних поља.",
    "rule1": "Отворите поље: број показује колико још непронађених лисица видите дуж реда, колоне и дијагонала — у осам праваца.",
    "rule2": "Упоређујте трагове, правите белешке и користите рефлекторе. Када пронађете лисицу, бројеви на табли се мењају.",
    "rule3": "Почните брзом игром или решавајте задатке. Правила, подешавања и избор језика налазе се у игри.",
    "insideLabel": "ОД ЈЕДНОСТАВНОГ ДО НЕОЧЕКИВАНОГ",
    "insideTitle": "Логика са карактером.",
    "inside1": "Огледала мењају смер зрака, а камење и шума утичу на видљивост. Лисице долазе у разним бојама и крију се у читавим породицама.",
    "inside2": "Испробајте различите услове и пронађите свој начин да читате таблу.",
    "start": "Започни игру",
    "inputNote": "<strong>Миш или додир.</strong> Интерфејс се прилагођава величини екрана. На мањем екрану испробајте водоравни положај.",
    "saveNote": "<strong>Напредак у овом прегледачу.</strong> Наставите игру на истом уређају. Брисање података сајта или приватни режим могу обрисати сачувану игру.",
    "privacy": "Приватност",
    "font": "Лиценца фонта",
    "pageTitle": "Лов на лисице — играј у прегледачу",
    "description": "Логичка слагалица „Лов на лисице”: пронађите скривене лисице уз помоћ бројчаних трагова. Играјте бесплатно у прегледачу.",
    "coverAlt": "Лисице на табли, бројчани трагови и зраци",
    "screenshotAlt": "Екран игре „Лов на лисице” са бројчаним траговима и контролама",
    "before": "Пре почетка"
  },
  "en": {
    "skip": "Skip to content",
    "allProjects": "All projects by the creator",
    "eyebrow": "A LOGIC PUZZLE",
    "title": "Everyone wants to know<br>where the <em>fox</em> is hiding",
    "lead": "Every cell holds a clue.<br>Every fox has a hiding place.<br>Connect the facts and find them all.",
    "play": "Play in your browser",
    "load": "Free · no installation<br>First load — about 31 MB",
    "caption": "Fox Hunting",
    "howLabel": "HOW TO PLAY",
    "howTitle": "Look beyond<br> the next cell.",
    "rule1": "Reveal a cell: its number tells you how many undiscovered foxes are visible along the row, column and diagonals — in eight directions.",
    "rule2": "Compare clues, place marks and use spotlights. When you find a fox, the numbers on the board change.",
    "rule3": "Start a quick game or work through challenges. Rules, settings and language selection are available inside the game.",
    "insideLabel": "FROM SIMPLE TO SURPRISING",
    "insideTitle": "Logic with character.",
    "inside1": "Mirrors redirect rays, while rocks and forests affect visibility. Foxes come in different colours and hide in whole families.",
    "inside2": "Explore different conditions and find your own way to read the board.",
    "start": "Start playing",
    "inputNote": "<strong>Mouse or touch.</strong> The interface adapts to your screen. On a small screen, try landscape orientation.",
    "saveNote": "<strong>Progress stays in this browser.</strong> Continue on the same device. Clearing site data or using private browsing may remove saved progress.",
    "privacy": "Privacy",
    "font": "Font licence",
    "pageTitle": "Fox Hunting — play in your browser",
    "description": "Fox Hunting: a logic puzzle about finding hidden foxes using number clues. Play free in your browser.",
    "coverAlt": "Foxes on a grid with number clues and rays",
    "screenshotAlt": "Fox Hunting gameplay with number clues and controls",
    "before": "Before you play"
  }
};

const htmlKeys = new Set(["title", "lead", "load", "howTitle", "inputNote", "saveNote"]);
const supported = language => Object.hasOwn(translations, language);
function setLanguage(language, updateUrl = true) {
  const key = supported(language) ? language : "ru";
  const text = translations[key];
  document.documentElement.lang = key === "sr" ? "sr-Cyrl" : key;
  document.title = text.pageTitle;
  document.querySelector('meta[name="description"]').content = text.description;
  document.querySelector('meta[property="og:title"]').content = text.pageTitle;
  document.querySelector('meta[property="og:description"]').content = text.description;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const name = element.dataset.i18n;
    if (htmlKeys.has(name)) element.innerHTML = text[name];
    else element.textContent = text[name];
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(element => { element.alt = text[element.dataset.i18nAlt]; });
  document.querySelectorAll('[data-i18n-label]').forEach(element => { element.setAttribute('aria-label', text[element.dataset.i18nLabel]); });
  document.querySelectorAll('[data-lang]').forEach(button => { button.setAttribute('aria-pressed', String(button.dataset.lang === key)); });
  document.querySelectorAll('[data-project-link]').forEach(link => {
    const url = new URL(link.href); url.searchParams.set('lang', key); link.href = url.href;
  });
  try { localStorage.setItem('loginyul-language', key); } catch (_) { /* Private browsing may disable storage. */ }
  if (updateUrl) {
    const url = new URL(location.href); url.searchParams.set('lang', key); history.replaceState(null, '', url);
  }
}
function initialLanguage() {
  const requested = new URLSearchParams(location.search).get('lang');
  if (supported(requested)) return requested;
  try { const saved = localStorage.getItem('loginyul-language'); if (supported(saved)) return saved; } catch (_) {}
  return 'ru';
}
document.querySelectorAll('[data-lang]').forEach(button => { button.addEventListener('click', () => setLanguage(button.dataset.lang)); });
window.addEventListener('pageshow', () => setLanguage(initialLanguage(), false));
setLanguage(initialLanguage(), false);
