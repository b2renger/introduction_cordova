var cacheName = 'p5js-pwa';

var filesToCache = [
    '/',
    './index.html',
    './main.js',
    'js/basic_bool_animation2_backup.json',
    'js/basic_bool_animation2_backup_nopath.json',
    'js/patch.js'
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