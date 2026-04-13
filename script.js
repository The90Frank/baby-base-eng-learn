// ── Dati categorie (embedded per compatibilità file://) ──
const categoriesData = {
    animals: {
        name: "Animals", icon: "🐾",
        levels: {
            1: [
                { w: "Dog", d: "🐶" }, { w: "Cat", d: "🐱" }, { w: "Fish", d: "🐟" },
                { w: "Bird", d: "🐦" }, { w: "Rabbit", d: "🐰" }, { w: "Mouse", d: "🐭" }
            ],
            2: [
                { w: "Lion", d: "🦁" }, { w: "Elephant", d: "🐘" }, { w: "Monkey", d: "🐵" },
                { w: "Horse", d: "🐴" }, { w: "Pig", d: "🐷" }, { w: "Frog", d: "🐸" },
                { w: "Bear", d: "🐻" }, { w: "Cow", d: "🐮" }
            ],
            3: [
                { w: "Whale", d: "🐋" }, { w: "Dolphin", d: "🐬" }, { w: "Octopus", d: "🐙" },
                { w: "Penguin", d: "🐧" }, { w: "Butterfly", d: "🦋" }, { w: "Turtle", d: "🐢" },
                { w: "Crocodile", d: "🐊" }, { w: "Owl", d: "🦉" }, { w: "Giraffe", d: "🦒" },
                { w: "Zebra", d: "🦓" }
            ]
        }
    },
    food: {
        name: "Food", icon: "🍽️",
        levels: {
            1: [
                { w: "Apple", d: "🍎" }, { w: "Banana", d: "🍌" }, { w: "Milk", d: "🥛" },
                { w: "Egg", d: "🥚" }, { w: "Bread", d: "🍞" }, { w: "Water", d: "💧" }
            ],
            2: [
                { w: "Orange", d: "🍊" }, { w: "Grapes", d: "🍇" }, { w: "Pizza", d: "🍕" },
                { w: "Cake", d: "🎂" }, { w: "Cheese", d: "🧀" }, { w: "Cookie", d: "🍪" },
                { w: "Ice Cream", d: "🍦" }, { w: "Candy", d: "🍬" }
            ],
            3: [
                { w: "Strawberry", d: "🍓" }, { w: "Watermelon", d: "🍉" }, { w: "Pineapple", d: "🍍" },
                { w: "Broccoli", d: "🥦" }, { w: "Mushroom", d: "🍄" }, { w: "Avocado", d: "🥑" },
                { w: "Coconut", d: "🥥" }, { w: "Chocolate", d: "🍫" }, { w: "Sandwich", d: "🥪" },
                { w: "Spaghetti", d: "🍝" }
            ]
        }
    },
    colors: {
        name: "Colors", icon: "🎨",
        levels: {
            1: [
                { w: "Red", d: '<div class="color-block" style="background-color:red"></div>' },
                { w: "Blue", d: '<div class="color-block" style="background-color:blue"></div>' },
                { w: "Yellow", d: '<div class="color-block" style="background-color:yellow"></div>' },
                { w: "Green", d: '<div class="color-block" style="background-color:green"></div>' }
            ],
            2: [
                { w: "Orange", d: '<div class="color-block" style="background-color:orange"></div>' },
                { w: "Purple", d: '<div class="color-block" style="background-color:purple"></div>' },
                { w: "Pink", d: '<div class="color-block" style="background-color:pink"></div>' },
                { w: "Brown", d: '<div class="color-block" style="background-color:brown"></div>' },
                { w: "Black", d: '<div class="color-block" style="background-color:black"></div>' },
                { w: "White", d: '<div class="color-block" style="background-color:white;border:2px solid #ccc"></div>' }
            ],
            3: [
                { w: "Gray", d: '<div class="color-block" style="background-color:gray"></div>' },
                { w: "Gold", d: '<div class="color-block" style="background-color:gold"></div>' },
                { w: "Silver", d: '<div class="color-block" style="background-color:silver"></div>' },
                { w: "Turquoise", d: '<div class="color-block" style="background-color:turquoise"></div>' },
                { w: "Violet", d: '<div class="color-block" style="background-color:violet"></div>' },
                { w: "Coral", d: '<div class="color-block" style="background-color:coral"></div>' }
            ]
        }
    },
    objects: {
        name: "Objects", icon: "🎯",
        levels: {
            1: [
                { w: "Ball", d: "⚽" }, { w: "Car", d: "🚗" }, { w: "Book", d: "📖" },
                { w: "House", d: "🏠" }, { w: "Phone", d: "📱" }, { w: "Key", d: "🔑" }
            ],
            2: [
                { w: "Bicycle", d: "🚲" }, { w: "Airplane", d: "✈️" }, { w: "Guitar", d: "🎸" },
                { w: "Camera", d: "📷" }, { w: "Umbrella", d: "☂️" }, { w: "Clock", d: "🕐" },
                { w: "Balloon", d: "🎈" }, { w: "Rocket", d: "🚀" }
            ],
            3: [
                { w: "Telescope", d: "🔭" }, { w: "Microscope", d: "🔬" }, { w: "Scissors", d: "✂️" },
                { w: "Paintbrush", d: "🖌️" }, { w: "Compass", d: "🧭" }, { w: "Hourglass", d: "⏳" },
                { w: "Diamond", d: "💎" }, { w: "Helicopter", d: "🚁" }
            ]
        }
    },
    nature: {
        name: "Nature", icon: "🌿",
        levels: {
            1: [
                { w: "Sun", d: "☀️" }, { w: "Moon", d: "🌙" }, { w: "Star", d: "⭐" },
                { w: "Tree", d: "🌳" }, { w: "Flower", d: "🌸" }, { w: "Rain", d: "🌧️" }
            ],
            2: [
                { w: "Cloud", d: "☁️" }, { w: "Rainbow", d: "🌈" }, { w: "Mountain", d: "⛰️" },
                { w: "Ocean", d: "🌊" }, { w: "Snow", d: "❄️" }, { w: "Fire", d: "🔥" },
                { w: "Lightning", d: "⚡" }, { w: "Leaf", d: "🍃" }
            ],
            3: [
                { w: "Volcano", d: "🌋" }, { w: "Tornado", d: "🌪️" }, { w: "Cactus", d: "🌵" },
                { w: "Mushroom", d: "🍄" }, { w: "Sunrise", d: "🌅" }, { w: "Waterfall", d: "💦" },
                { w: "Earthquake", d: "🌍" }, { w: "Glacier", d: "🏔️" }
            ]
        }
    }
};

// ── Stato impostazioni ──
// Ogni categoria: { enabled: bool, level: 1|2|3 }
const settings = {};

// ── Stato gioco ──
let dictionary = [];
let target = {};
let options = [];
let canClick = true;

// Inizializza voci browser
let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
};

// ── Render settings ──
function initSettings() {
    const container = document.getElementById('categories-list');
    container.innerHTML = '';

    for (const [key, cat] of Object.entries(categoriesData)) {
        settings[key] = { enabled: true, level: 1 };

        const card = document.createElement('div');
        card.className = 'category-card';
        card.id = `card-${key}`;

        // Toggle button
        const toggle = document.createElement('button');
        toggle.className = 'category-toggle active';
        toggle.textContent = cat.icon;
        toggle.onclick = () => toggleCategory(key);
        toggle.id = `toggle-${key}`;

        // Info
        const info = document.createElement('div');
        info.className = 'category-info';

        const name = document.createElement('div');
        name.className = 'category-name';
        name.textContent = cat.name;

        const levelSel = document.createElement('div');
        levelSel.className = 'level-selector';

        for (let l = 1; l <= 3; l++) {
            const btn = document.createElement('button');
            btn.className = 'level-btn' + (l === 1 ? ' selected' : '');
            btn.textContent = l;
            btn.id = `lvl-${key}-${l}`;
            btn.onclick = () => setLevel(key, l);
            levelSel.appendChild(btn);
        }

        info.appendChild(name);
        info.appendChild(levelSel);
        card.appendChild(toggle);
        card.appendChild(info);
        container.appendChild(card);
    }
}

function toggleCategory(key) {
    settings[key].enabled = !settings[key].enabled;
    const toggle = document.getElementById(`toggle-${key}`);
    const card = document.getElementById(`card-${key}`);

    if (settings[key].enabled) {
        toggle.classList.add('active');
        card.classList.remove('disabled');
    } else {
        toggle.classList.remove('active');
        card.classList.add('disabled');
    }
}

function setLevel(key, level) {
    settings[key].level = level;
    for (let l = 1; l <= 3; l++) {
        const btn = document.getElementById(`lvl-${key}-${l}`);
        btn.classList.toggle('selected', l <= level);
    }
}

// ── Costruisce il dizionario attivo in base alle impostazioni ──
function buildDictionary() {
    dictionary = [];
    for (const [key, cfg] of Object.entries(settings)) {
        if (!cfg.enabled) continue;
        const cat = categoriesData[key];
        // Include tutti i livelli fino a quello selezionato
        for (let l = 1; l <= cfg.level; l++) {
            dictionary.push(...cat.levels[l]);
        }
    }
}

// ── Audio ──
function speak(text, rate = 0.8) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = rate;
    window.speechSynthesis.speak(u);
}

// ── Gioco ──
function startGame() {
    buildDictionary();

    if (dictionary.length < 4) {
        alert('Seleziona almeno una categoria con abbastanza parole!');
        return;
    }

    speak("Let's go!", 1.0);
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    setTimeout(startRound, 1000);
}

function repeatWord() {
    if (target.w) {
        speak(`Where is the ${target.w}?`);
    }
}

function startRound() {
    canClick = true;
    document.getElementById('feedback').textContent = '';

    const shuffled = [...dictionary].sort(() => 0.5 - Math.random());
    options = shuffled.slice(0, 4);
    target = options[Math.floor(Math.random() * 4)];

    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById('c' + i);
        btn.innerHTML = options[i].d;
        btn.className = 'choice-btn';
    }

    setTimeout(repeatWord, 100);
}

function check(idx) {
    if (!canClick) return;

    const btn = document.getElementById('c' + idx);
    if (options[idx].w === target.w) {
        canClick = false;
        btn.className = 'choice-btn correct';
        document.getElementById('feedback').textContent = 'Bravissima! 🌟';
        speak("Yes! Well done, it's the " + target.w);
        setTimeout(startRound, 2500);
    } else {
        btn.className = 'choice-btn wrong';
        speak('No, try again', 1.0);
        setTimeout(() => {
            if (canClick) btn.className = 'choice-btn';
        }, 1000);
    }
}

// ── Init ──
initSettings();
