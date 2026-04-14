const CACHE_NAME = 'eng-4-kids-v1';
const ASSETS = [
  './',
  './index.html',
  './script.js',
  './style.css',
  './data/animals.json',
  './data/colors.json',
  './data/food.json',
  './data/nature.json',
  './data/objects.json',
  './data/jobs.json',
  './data/sports.json'
];

// Installa e salva in cache i file
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Serve i file dalla cache se offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});