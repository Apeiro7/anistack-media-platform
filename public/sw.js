// public/sw.js

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

// A fetch listener is REQUIRED by browsers to trigger the PWA install prompt
self.addEventListener('fetch', (e) => {
  // You don't need to do anything here if you don't want offline support,
  // but the listener must exist.
});
