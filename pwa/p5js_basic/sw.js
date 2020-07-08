var cacheName = 'p5js-pwa';

var filesToCache = [
    '/',
    './index.html',
    './sketch.js',
    './main.js',
    'libs/p5.min.js',
    'libs/p5.sound.min.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});