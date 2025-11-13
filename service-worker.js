const CACHE_NAME = 'aviator-demo-v1';
const FILES_TO_CACHE = [
  '/aviator-demo/',
  '/aviator-demo/index.html'
];

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((r) => r || fetch(evt.request))
  );
});
