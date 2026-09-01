/* Service worker — l'application fonctionne hors ligne ET se met à jour.
   Stratégie : réseau d'abord pour le HTML (donc toute nouvelle version
   publiée est prise immédiatement), cache d'abord pour les icônes. */
const CACHE = "charge-v2";
const FICHIERS = [
  "./", "./index.html", "./manifest.webmanifest",
  "./icone-192.png", "./icone-512.png", "./icone-maskable.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(FICHIERS).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(cles => Promise.all(cles.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const estPage = req =>
  req.mode === "navigate" ||
  (req.headers.get("accept") || "").includes("text/html");

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  /* Pages : on tente le réseau, on garde une copie fraîche pour le hors ligne. */
  if (estPage(e.request)) {
    e.respondWith(
      fetch(e.request)
        .then(rep => {
          const copie = rep.clone();
          caches.open(CACHE).then(c => c.put("./index.html", copie));
          return rep;
        })
        .catch(() => caches.match(e.request).then(r => r || caches.match("./index.html")))
    );
    return;
  }

  /* Le reste : cache d'abord, rafraîchi en arrière-plan. */
  e.respondWith(
    caches.match(e.request).then(cache => {
      const reseau = fetch(e.request).then(rep => {
        if (rep && rep.status === 200) {
          const copie = rep.clone();
          caches.open(CACHE).then(c => c.put(e.request, copie));
        }
        return rep;
      }).catch(() => cache);
      return cache || reseau;
    })
  );
});
