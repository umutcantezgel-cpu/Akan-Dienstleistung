if (!self.define) {
  let e,
    a = {};
  const n = (n, i) => (
    (n = new URL(n + ".js", i).href),
    a[n] ||
      new Promise((a) => {
        if ("document" in self) {
          const e = document.createElement("script");
          ((e.src = n), (e.onload = a), document.head.appendChild(e));
        } else ((e = n), importScripts(n), a());
      }).then(() => {
        let e = a[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, s) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (a[c]) return;
    let t = {};
    const r = (e) => n(e, c),
      u = { module: { uri: c }, exports: t, require: r };
    a[c] = Promise.all(i.map((e) => u[e] || r(e))).then((e) => (s(...e), t));
  };
}
define(["./workbox-f1770938"], function (e) {
  "use strict";
  (importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/4-SaUdjguXt3-x0sjIvNR/_buildManifest.js",
          revision: "5754f11c99aac9f8e8b6c3d130816ec9",
        },
        {
          url: "/_next/static/4-SaUdjguXt3-x0sjIvNR/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/1356-c2532edfe2802f25.js",
          revision: "c2532edfe2802f25",
        },
        {
          url: "/_next/static/chunks/1679-826c274bba48f709.js",
          revision: "826c274bba48f709",
        },
        {
          url: "/_next/static/chunks/2012.65e674c3190ad040.js",
          revision: "65e674c3190ad040",
        },
        {
          url: "/_next/static/chunks/2057.c5db0519526e26a9.js",
          revision: "c5db0519526e26a9",
        },
        {
          url: "/_next/static/chunks/2231-05d84736cd84dca8.js",
          revision: "05d84736cd84dca8",
        },
        {
          url: "/_next/static/chunks/2321.b7074e4bba73b629.js",
          revision: "b7074e4bba73b629",
        },
        {
          url: "/_next/static/chunks/2365.8458279830ecbf70.js",
          revision: "8458279830ecbf70",
        },
        {
          url: "/_next/static/chunks/2619-04bc32f026a0d946.js",
          revision: "04bc32f026a0d946",
        },
        {
          url: "/_next/static/chunks/2641.b023a2464db8d01f.js",
          revision: "b023a2464db8d01f",
        },
        {
          url: "/_next/static/chunks/2781-bd97308521f09804.js",
          revision: "bd97308521f09804",
        },
        {
          url: "/_next/static/chunks/2791.0679fec02e6142b8.js",
          revision: "0679fec02e6142b8",
        },
        {
          url: "/_next/static/chunks/2819-8a164a876e4026c2.js",
          revision: "8a164a876e4026c2",
        },
        {
          url: "/_next/static/chunks/2843.3bc32628efecf2d9.js",
          revision: "3bc32628efecf2d9",
        },
        {
          url: "/_next/static/chunks/2850.726e4b07f3c40d38.js",
          revision: "726e4b07f3c40d38",
        },
        {
          url: "/_next/static/chunks/3007-337809d93cf5d2a2.js",
          revision: "337809d93cf5d2a2",
        },
        {
          url: "/_next/static/chunks/3484.70cee653347c9277.js",
          revision: "70cee653347c9277",
        },
        {
          url: "/_next/static/chunks/3517.0069ac4cba7354c9.js",
          revision: "0069ac4cba7354c9",
        },
        {
          url: "/_next/static/chunks/3790.8755bb2086803efd.js",
          revision: "8755bb2086803efd",
        },
        {
          url: "/_next/static/chunks/4544-c43238e06277cbaa.js",
          revision: "c43238e06277cbaa",
        },
        {
          url: "/_next/static/chunks/4696-eeb1d3d6403c8612.js",
          revision: "eeb1d3d6403c8612",
        },
        {
          url: "/_next/static/chunks/4898.8afc98f933e265ac.js",
          revision: "8afc98f933e265ac",
        },
        {
          url: "/_next/static/chunks/4992-a6c5424bb3cccc4d.js",
          revision: "a6c5424bb3cccc4d",
        },
        {
          url: "/_next/static/chunks/4bd1b696-100b9d70ed4e49c1.js",
          revision: "100b9d70ed4e49c1",
        },
        {
          url: "/_next/static/chunks/5104-85e66a373251e597.js",
          revision: "85e66a373251e597",
        },
        {
          url: "/_next/static/chunks/540.bb3fd8fe3d7436f7.js",
          revision: "bb3fd8fe3d7436f7",
        },
        {
          url: "/_next/static/chunks/5448-371752a882aeea46.js",
          revision: "371752a882aeea46",
        },
        {
          url: "/_next/static/chunks/5778.be633ac7f2835be9.js",
          revision: "be633ac7f2835be9",
        },
        {
          url: "/_next/static/chunks/5929.61871a968cd06dac.js",
          revision: "61871a968cd06dac",
        },
        {
          url: "/_next/static/chunks/6082.dc813a5b982c86c0.js",
          revision: "dc813a5b982c86c0",
        },
        {
          url: "/_next/static/chunks/6095-9b7e4a53af19b602.js",
          revision: "9b7e4a53af19b602",
        },
        {
          url: "/_next/static/chunks/6190-d51b3b7161777966.js",
          revision: "d51b3b7161777966",
        },
        {
          url: "/_next/static/chunks/6482.62a1e4dabf044c12.js",
          revision: "62a1e4dabf044c12",
        },
        {
          url: "/_next/static/chunks/6714-f22bfc5a7f3504ed.js",
          revision: "f22bfc5a7f3504ed",
        },
        {
          url: "/_next/static/chunks/6784-c9393493710cf237.js",
          revision: "c9393493710cf237",
        },
        {
          url: "/_next/static/chunks/7074.58589023f7c35bd4.js",
          revision: "58589023f7c35bd4",
        },
        {
          url: "/_next/static/chunks/7196.68ce6af32fe3aef5.js",
          revision: "68ce6af32fe3aef5",
        },
        {
          url: "/_next/static/chunks/724.03a747428884e3cc.js",
          revision: "03a747428884e3cc",
        },
        {
          url: "/_next/static/chunks/7252-e1a467c78da8b658.js",
          revision: "e1a467c78da8b658",
        },
        {
          url: "/_next/static/chunks/732.e2f84bcc39dd2169.js",
          revision: "e2f84bcc39dd2169",
        },
        {
          url: "/_next/static/chunks/7917.b6081784f331292d.js",
          revision: "b6081784f331292d",
        },
        {
          url: "/_next/static/chunks/7980.02225f667abfdd3e.js",
          revision: "02225f667abfdd3e",
        },
        {
          url: "/_next/static/chunks/8067.98ddb127a17253cc.js",
          revision: "98ddb127a17253cc",
        },
        {
          url: "/_next/static/chunks/809.9e5a2ad48a012ab0.js",
          revision: "9e5a2ad48a012ab0",
        },
        {
          url: "/_next/static/chunks/8214.6475ba5c4e488f19.js",
          revision: "6475ba5c4e488f19",
        },
        {
          url: "/_next/static/chunks/8723.8b9e4ce90e3f70d8.js",
          revision: "8b9e4ce90e3f70d8",
        },
        {
          url: "/_next/static/chunks/9016.945528df1f11751d.js",
          revision: "945528df1f11751d",
        },
        {
          url: "/_next/static/chunks/9136.073529ddfcd9bd5c.js",
          revision: "073529ddfcd9bd5c",
        },
        {
          url: "/_next/static/chunks/9236-deceec331f18cbe3.js",
          revision: "deceec331f18cbe3",
        },
        {
          url: "/_next/static/chunks/9908.e220d9a2ebc99709.js",
          revision: "e220d9a2ebc99709",
        },
        {
          url: "/_next/static/chunks/999-cf6e4e9e16752786.js",
          revision: "cf6e4e9e16752786",
        },
        {
          url: "/_next/static/chunks/app/(contact)/contact/page-4d4c485b8107bfcf.js",
          revision: "4d4c485b8107bfcf",
        },
        {
          url: "/_next/static/chunks/app/(legal)/agb/page-62e7cd3f2589cd13.js",
          revision: "62e7cd3f2589cd13",
        },
        {
          url: "/_next/static/chunks/app/(legal)/datenschutz/page-5877c35697aadcb6.js",
          revision: "5877c35697aadcb6",
        },
        {
          url: "/_next/static/chunks/app/(legal)/impressum/page-1730a2835704d8bb.js",
          revision: "1730a2835704d8bb",
        },
        {
          url: "/_next/static/chunks/app/(marketing)/about/page-5f788081539756c4.js",
          revision: "5f788081539756c4",
        },
        {
          url: "/_next/static/chunks/app/(marketing)/page-2f2510f8aa48511d.js",
          revision: "2f2510f8aa48511d",
        },
        {
          url: "/_next/static/chunks/app/(marketing)/referenzen/page-44319ff9b43ebf05.js",
          revision: "44319ff9b43ebf05",
        },
        {
          url: "/_next/static/chunks/app/(marketing)/ueber-uns/page-d7218352aac81ce8.js",
          revision: "d7218352aac81ce8",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-5f788081539756c4.js",
          revision: "5f788081539756c4",
        },
        {
          url: "/_next/static/chunks/app/api/contact/route-5f788081539756c4.js",
          revision: "5f788081539756c4",
        },
        {
          url: "/_next/static/chunks/app/error-095afa1221a61f76.js",
          revision: "095afa1221a61f76",
        },
        {
          url: "/_next/static/chunks/app/layout-f41e19a2ad906213.js",
          revision: "f41e19a2ad906213",
        },
        {
          url: "/_next/static/chunks/app/leistungen/%5Bslug%5D/page-9bf8c2b8314c2ec1.js",
          revision: "9bf8c2b8314c2ec1",
        },
        {
          url: "/_next/static/chunks/app/loading-5f788081539756c4.js",
          revision: "5f788081539756c4",
        },
        {
          url: "/_next/static/chunks/app/not-found-ed45732b994cbb57.js",
          revision: "ed45732b994cbb57",
        },
        {
          url: "/_next/static/chunks/app/robots.txt/route-5f788081539756c4.js",
          revision: "5f788081539756c4",
        },
        {
          url: "/_next/static/chunks/app/sitemap.xml/route-5f788081539756c4.js",
          revision: "5f788081539756c4",
        },
        {
          url: "/_next/static/chunks/app/standorte/%5Bstadt%5D/page-72eba6d56fe97de7.js",
          revision: "72eba6d56fe97de7",
        },
        {
          url: "/_next/static/chunks/app/template-0b3b7b0db160e67b.js",
          revision: "0b3b7b0db160e67b",
        },
        {
          url: "/_next/static/chunks/d0deef33.59194872e4111dca.js",
          revision: "59194872e4111dca",
        },
        {
          url: "/_next/static/chunks/framework-a32a2a465584c0bc.js",
          revision: "a32a2a465584c0bc",
        },
        {
          url: "/_next/static/chunks/main-4c0bfadbb7901240.js",
          revision: "4c0bfadbb7901240",
        },
        {
          url: "/_next/static/chunks/main-app-eabefb0f8a5376f1.js",
          revision: "eabefb0f8a5376f1",
        },
        {
          url: "/_next/static/chunks/pages/_app-4b3fb5e477a0267f.js",
          revision: "4b3fb5e477a0267f",
        },
        {
          url: "/_next/static/chunks/pages/_error-c970d8b55ace1b48.js",
          revision: "c970d8b55ace1b48",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-c63bbe467b6e96e2.js",
          revision: "c63bbe467b6e96e2",
        },
        {
          url: "/_next/static/css/43ccba47c8debb24.css",
          revision: "43ccba47c8debb24",
        },
        {
          url: "/_next/static/css/55693049b062c6a3.css",
          revision: "55693049b062c6a3",
        },
        {
          url: "/_next/static/css/92d2845bf60dd2fa.css",
          revision: "92d2845bf60dd2fa",
        },
        {
          url: "/_next/static/css/ab47ee2ccd2cf533.css",
          revision: "ab47ee2ccd2cf533",
        },
        {
          url: "/_next/static/media/19cfc7226ec3afaa.woff2",
          revision: "9dda5cfc9a46f256d0e131bb535e46f8",
        },
        {
          url: "/_next/static/media/21350d82a1f187e9.woff2",
          revision: "4e2553027f1d60eff32898367dd4d541",
        },
        {
          url: "/_next/static/media/7b0b24f36b1a6d0b.p.woff2",
          revision: "98ccc2b7f18991a5126a91ac56fbb1fc",
        },
        {
          url: "/_next/static/media/8e9860b6e62d6359.woff2",
          revision: "01ba6c2a184b8cba08b0d57167664d75",
        },
        {
          url: "/_next/static/media/98848575513c9742.woff2",
          revision: "e2b64ddcb351dbe7397e0da426a8c8d6",
        },
        {
          url: "/_next/static/media/ba9851c3c22cd980.woff2",
          revision: "9e494903d6b0ffec1a1e14d34427d44d",
        },
        {
          url: "/_next/static/media/c5fe6dc8356a8c31.woff2",
          revision: "027a89e9ab733a145db70f09b8a18b42",
        },
        {
          url: "/_next/static/media/df0a9ae256c0569c.woff2",
          revision: "d54db44de5ccb18886ece2fda72bdfe0",
        },
        {
          url: "/_next/static/media/e4af272ccee01ff0.p.woff2",
          revision: "65850a373e258f1c897a2b3d75eb74de",
        },
        {
          url: "/_next/static/media/layers-2x.9859cd12.png",
          revision: "9859cd12",
        },
        {
          url: "/_next/static/media/layers.ef6db872.png",
          revision: "ef6db872",
        },
        {
          url: "/_next/static/media/marker-icon.d577052a.png",
          revision: "d577052a",
        },
        {
          url: "/images/blur-map.json",
          revision: "1f8c5128e1852a6478c23419ce4922d0",
        },
        {
          url: "/images/galerie/fensterreinigung/akan-fensterreinigung-fensterfront-komplett-sauber.webp",
          revision: "ae6a3b7823d28dc11416b5dea8bf5833",
        },
        {
          url: "/images/galerie/fensterreinigung/akan-fensterreinigung-panoramafenster-bergblick-ergebnis.webp",
          revision: "ff0bcaa21e0e0b77517bd92974794182",
        },
        {
          url: "/images/galerie/fensterreinigung/akan-fensterreinigung-terrassentuer-sauber-nachher.webp",
          revision: "e3e262adefd83b1176aa3492b941a105",
        },
        {
          url: "/images/galerie/fensterreinigung/akan-glasreinigung-mitarbeiter-branded-hoodie.webp",
          revision: "0edb97c732dbf590575b221113c4edf9",
        },
        {
          url: "/images/galerie/gewerbereinigung/akan-gewerbereinigung-glasfassade-gebaeude-aussen.webp",
          revision: "8dd6d60e92bf8bfb7b6fce1a6dd88a9b",
        },
        {
          url: "/images/galerie/glasreinigung/akan-wintergarten-reinigung-ergebnis-innenansicht.webp",
          revision: "4ea5737271ca7ef0753d03d1050fc4c2",
        },
        {
          url: "/images/galerie/industriereinigung/akan-deckenventilator-reinigung-industriehalle-vorher.webp",
          revision: "365d03db4e6dfb4da0b3f5a70cb7e2af",
        },
        {
          url: "/images/galerie/industriereinigung/akan-deckenventilator-verschmutzt-nahaufnahme.webp",
          revision: "1492ed58ba0eac31232fecd34e68fc95",
        },
        {
          url: "/images/galerie/industriereinigung/akan-industriehalle-reinigung-krananlage-perspektive.webp",
          revision: "05a27dfa09cf3818278beef4d2e34950",
        },
        {
          url: "/images/galerie/industriereinigung/akan-industriereinigung-lueftungsanlage-remko-vorher.webp",
          revision: "0ad4b1feb67cceb6a2436c93c0b9f6ec",
        },
        {
          url: "/images/galerie/industriereinigung/akan-industriereinigung-pvc-streifenvorhang-messraum.webp",
          revision: "3971eb6172d0e599a4eca515280c32f4",
        },
        {
          url: "/images/galerie/industriereinigung/akan-industriereinigung-pvc-vorhang-werkstatt-panorama.webp",
          revision: "a13c048ef2907b9adb26ef1cad039587",
        },
        {
          url: "/images/galerie/industriereinigung/akan-lueftungsreinigung-remko-aggregat-detail.webp",
          revision: "8dfee87b5d72995259d9acbb1f5ae629",
        },
        {
          url: "/images/galerie/industriereinigung/akan-pvc-streifenvorhang-detail-industriemaschinen.webp",
          revision: "379b520e8fd640af33475060a906c250",
        },
        {
          url: "/images/galerie/industriereinigung/akan-pvc-streifenvorhang-gereinigt-industrieanlage.webp",
          revision: "62b8e8b9e33898b465a7ec22e78cfe12",
        },
        {
          url: "/images/galerie/industriereinigung/akan-pvc-vorhang-reinigung-detail-rotmarkierung.webp",
          revision: "560dcf626b3504894d750edcd7e8648e",
        },
        {
          url: "/images/galerie/industriereinigung/akan-pvc-vorhang-reinigung-industrieanlage-nahaufnahme.webp",
          revision: "74284b7202d47754aafaf7105bbaca6b",
        },
        {
          url: "/images/hero/akan-fensterreinigung-team-teleskopstange-aktion.webp",
          revision: "f3f4b04630c9f909e43df888d0a5255e",
        },
        {
          url: "/images/hero/akan-glasfassade-reinigung-gewerbegebaeude-eingang.webp",
          revision: "8b0ae9378678fb804315062e500bcf05",
        },
        {
          url: "/images/hero/akan-hallreinigung-stahlkonstruktion-kran-vetter.webp",
          revision: "160e7c19aacd29ec8215a6ed9e4861b8",
        },
        {
          url: "/images/hero/akan-team-hubsteiger-deckenventilator-reinigung-aktion.webp",
          revision: "0ddfc6a56d9e98bed41b1a5d554bb33f",
        },
        {
          url: "/images/logos/akan-dienstleistung-logo-dunkel.png",
          revision: "e9a8a9f95f7794ef58a9b903e3788789",
        },
        {
          url: "/images/logos/akan-dienstleistung-logo-dunkel.webp",
          revision: "770c7bc8340daca60a8b3e7da6d159d8",
        },
        {
          url: "/images/logos/akan-dienstleistung-logo-hell.png",
          revision: "049ca55af3f0e92ee270598faa1d468a",
        },
        {
          url: "/images/logos/akan-dienstleistung-logo-hell.webp",
          revision: "ee4348b694db60981d645b82ce04e91f",
        },
        {
          url: "/images/logos/akan-logo.svg",
          revision: "8acfcd76fb6bfe26e9b94b8a5e216ca2",
        },
        {
          url: "/images/map-placeholder.png",
          revision: "b0ad1d9d4cbabe2ab56eb4405e94e49c",
        },
        {
          url: "/images/vorher-nachher/akan-bodenreinigung-industriehalle-nachher-glaenzend.webp",
          revision: "94f7ca445e71b3bd2fb1836b5142aee5",
        },
        {
          url: "/images/vorher-nachher/akan-bodenreinigung-industriehalle-vorher-verschmutzt.webp",
          revision: "70541373aa904c465b5190e22ab37ec6",
        },
        {
          url: "/images/vorher-nachher/akan-glasreinigung-pavillon-sauber-nachher.webp",
          revision: "de3e8a796127056a648ee923ab007485",
        },
        {
          url: "/images/vorher-nachher/akan-glasreinigung-wintergarten-verschmutzt-vorher.webp",
          revision: "16f80ccd33e6409ff99fabb139d0405a",
        },
        { url: "/manifest.json", revision: "40910e5849643fc60fe448d5a8da0eca" },
        {
          url: "/swe-worker-5c72df51bb1f6ee0.js",
          revision: "76fdd3369f623a3edcf74ce2200bfdd0",
        },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: function (e) {
              var a = e.response;
              return _async_to_generator(function () {
                return _ts_generator(this, function (e) {
                  return [
                    2,
                    a && "opaqueredirect" === a.type
                      ? new Response(a.body, {
                          status: 200,
                          statusText: "OK",
                          headers: a.headers,
                        })
                      : a,
                  ];
                });
              })();
            },
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: "next-static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      function (e) {
        var a = e.sameOrigin,
          n = e.url.pathname;
        return !(
          !a ||
          n.startsWith("/api/auth/callback") ||
          !n.startsWith("/api/")
        );
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      function (e) {
        var a = e.request,
          n = e.url.pathname,
          i = e.sameOrigin;
        return (
          "1" === a.headers.get("RSC") &&
          "1" === a.headers.get("Next-Router-Prefetch") &&
          i &&
          !n.startsWith("/api/")
        );
      },
      new e.NetworkFirst({
        cacheName: "pages-rsc-prefetch",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      function (e) {
        var a = e.request,
          n = e.url.pathname,
          i = e.sameOrigin;
        return "1" === a.headers.get("RSC") && i && !n.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "pages-rsc",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      function (e) {
        var a = e.url.pathname;
        return e.sameOrigin && !a.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "pages",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      function (e) {
        return !e.sameOrigin;
      },
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    ),
    (self.__WB_DISABLE_DEV_LOGS = !0));
});
