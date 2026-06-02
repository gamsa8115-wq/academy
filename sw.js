// THEFIRST LMS Service Worker
const CACHE = 'thefirst-lms-v1';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  self.clients.claim();
});

// 네트워크 우선 전략 (Firebase 실시간 DB 사용하므로)
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
