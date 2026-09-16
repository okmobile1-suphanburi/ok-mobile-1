// Minimal service worker.
// Its only job is to exist, so the browser considers this page installable.
// It does not cache anything or intercept requests, so it can't break the site.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', () => {
  // Intentionally left empty - all requests just go straight to the network.
});
