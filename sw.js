// sw.js - Service Worker for offline support of main flow and pixel assets
const CACHE_NAME = 'nagasaki-v1.1';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './data.js',
  './app.js',
  './manifest.json',
  './assets/girl_0_0.png',
  './assets/girl_0_1.png',
  './assets/girl_0_2.png',
  './assets/girl_1_0.png',
  './assets/girl_1_1.png',
  './assets/girl_1_2.png',
  './assets/girl_2_0.png',
  './assets/girl_2_1.png',
  './assets/girl_2_2.png',
  './assets/pet_0_0.png',
  './assets/pet_0_1.png',
  './assets/pet_0_2.png',
  './assets/pet_0_3.png',
  './assets/pet_1_0.png',
  './assets/pet_1_1.png',
  './assets/pet_1_2.png',
  './assets/pet_1_3.png',
  './assets/pet_2_0.png',
  './assets/pet_2_1.png',
  './assets/pet_2_2.png',
  './assets/pet_2_3.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Network first for HTML, cache first for assets
  if (e.request.mode === 'navigate' || e.request.destination === 'document') {
    e.respondWith(
      fetch(e.request).catch(() => caches.match('./index.html'))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request).then(res => {
        if (res.ok && e.request.url.startsWith(self.location.origin)) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => caches.match(e.request)))
    );
  }
});
