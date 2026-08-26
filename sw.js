// Nom et version du cache (à incrémenter si vous mettez à jour vos questions/fichiers)
const CACHE_NAME = 'jsp-quiz-v1';

// Liste des fichiers essentiels à mettre en cache pour le mode hors-ligne
const urlsToCache = [
  '/',
  '/index.html',
  // Ajoutez ici vos fichiers CSS, JS principaux et vos banques de questions :
  // '/style.css',
  // '/app.js',
  // '/questions-jsp3.js',
  // '/questions-jsp4.js'
];

// 1. Installation du Service Worker : mise en cache des fichiers de base
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache ouvert avec succès');
        return cache.addAll(urlsToCache);
      })
  );
  // Force l'activation immédiate du nouveau service worker
  self.skipWaiting();
});

// 2. Activation : nettoyage des anciens caches si la version change
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Suppression de l’ancien cache :', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. Interception des requêtes réseau : stratégie "Cache First, falling back to Network"
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si le fichier est dans le cache, on le retourne directement
        if (response) {
          return response;
        }
        // Sinon, on va le chercher sur le réseau
        return fetch(event.request).then(
          (networkResponse) => {
            // Optionnel : on peut vérifier ici si la réponse est valide avant de la mettre en cache dynamique
            return networkResponse;
          }
        ).catch(() => {
          // Fallback en cas d'échec total (hors-ligne et fichier absent du cache initial)
          // Vous pouvez retourner une page HTML de secours personnalisée si besoin.
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        });
      })
  );
});