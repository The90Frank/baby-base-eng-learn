/**
 * GIOCO DELLE PAROLE - JS COMPLETO
 * Versione: Caricamento Dinamico + Anti-Ripetizione + Controllo Icone Duplicate
 */

// ── Stato globale ──
let categoriesData = {}; 
const settings = {};

// ── Stato gioco ──
let dictionary = [];
let target = {};
let options = [];
let canClick = true;

// ── Sistema Anti-Ripetizione ──
let recentTargets = []; 
const MAX_HISTORY = 10;

// Inizializza voci browser
let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
};

// ── 1. Caricamento JSON da path relativi ──
async function loadAllCategories() {
    // Lista dei file .json nella cartella ./data/
    // Aggiungi 'jobs' o 'sports' qui se hai creato i relativi file
    const categoriesToLoad = ['animals', 'colors', 'food', 'nature', 'objects', 'jobs', 'sports'];
    
    try {
        const loadPromises = categoriesToLoad.map(async (catName) => {
            const response = await fetch(`./data/${catName}.json`);
            if (!response.ok) throw new Error(`Errore caricando ${catName}`);
            const data = await response.json();
            categoriesData[catName] = data;
        });

        await Promise.all(loadPromises);
        initSettings(); 
    } catch (error) {
        console.error("Errore fatale:", error);
        alert("Errore nel caricamento dei dati. Controlla la console.");
    }
}

// ── 2. Rendering Impostazioni ──
function initSettings() {
    const container = document.getElementById('categories-list');
    if (!container) return;
    container.innerHTML = '';

    for (const [key, cat] of Object.entries(categoriesData)) {
        settings[key] = { enabled: true, level: 1 };

        const card = document.createElement('div');
        card.className = 'category-card';
        card.id = `card-${key}`;

        const toggle = document.createElement('button');
        toggle.className = 'category-toggle active';
        toggle.textContent = cat.icon;
        toggle.onclick = () => toggleCategory(key);
        toggle.id = `toggle-${key}`;

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
    toggle.classList.toggle('active', settings[key].enabled);
    card.classList.toggle('disabled', !settings[key].enabled);
}

function setLevel(key, level) {
    settings[key].level = level;
    for (let l = 1; l <= 3; l++) {
        const btn = document.getElementById(`lvl-${key}-${l}`);
        btn.classList.toggle('selected', l <= level);
    }
}

// ── 3. Logica di Gioco ──

function buildDictionary() {
    dictionary = [];
    for (const [key, cfg] of Object.entries(settings)) {
        if (!cfg.enabled) continue;
        const cat = categoriesData[key];
        for (let l = 1; l <= cfg.level; l++) {
            dictionary.push(...cat.levels[l]);
        }
    }
}

function speak(text, rate = 0.8) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = rate;
    window.speechSynthesis.speak(u);
}

function startGame() {
    buildDictionary();
    if (dictionary.length < 4) {
        alert('Seleziona più parole per giocare!');
        return;
    }
    recentTargets = [];
    speak("Let's go!", 1.0);
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    setTimeout(startRound, 1000);
}

function startRound() {
    canClick = true;
    document.getElementById('feedback').textContent = '';

    // Filtro Anti-Ripetizione Target
    const dynamicHistoryLimit = Math.min(recentTargets.length, Math.floor(dictionary.length * 0.4));
    const effectiveHistory = recentTargets.slice(-dynamicHistoryLimit);
    const availableTargets = dictionary.filter(item => !effectiveHistory.includes(item.w));
    
    const targetPool = availableTargets.length > 0 ? availableTargets : dictionary;
    target = targetPool[Math.floor(Math.random() * targetPool.length)];

    recentTargets.push(target.w);
    if (recentTargets.length > MAX_HISTORY) recentTargets.shift();

    // --- NUOVA LOGICA: SELEZIONE OPZIONI UNIVOCHE PER ICONA ---
    let roundOptions = [target];
    
    // Mescoliamo il dizionario per scegliere i distrattori in ordine casuale
    let candidates = [...dictionary].sort(() => 0.5 - Math.random());

    for (let item of candidates) {
        if (roundOptions.length >= 4) break;

        // Verifica che NON ci sia già una parola con lo stesso NOME o la stessa ICONA
        const isDuplicateName = roundOptions.some(opt => opt.w === item.w);
        const isDuplicateIcon = roundOptions.some(opt => opt.d === item.d);

        if (!isDuplicateName && !isDuplicateIcon) {
            roundOptions.push(item);
        }
    }

    // Caso d'emergenza: se il dizionario è troppo piccolo e non trovo 4 icone diverse,
    // allento il vincolo dell'icona (ma mantengo quello del nome)
    if (roundOptions.length < 4) {
        for (let item of candidates) {
            if (roundOptions.length >= 4) break;
            if (!roundOptions.some(opt => opt.w === item.w)) {
                roundOptions.push(item);
            }
        }
    }

    // Mescoliamo le 4 opzioni finali per la posizione dei pulsanti
    options = roundOptions.sort(() => 0.5 - Math.random());

    // Rendering pulsanti
    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById('c' + i);
        btn.innerHTML = options[i].d;
        btn.className = 'choice-btn';
    }

    setTimeout(repeatWord, 100);
}

function repeatWord() {
    if (target.w) {
        speak(`Where is the ${target.w}?`);
    }
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

// ── Avvio ──
loadAllCategories();