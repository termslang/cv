'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ee9b6ecbd94343f057f01d477eb7ccdc",
"index.html": "3583c938112647366647f2675ec5ebc6",
"/": "3583c938112647366647f2675ec5ebc6",
"main.dart.js": "d410506e77ab72aa49d727efb87dfdf9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cd76115896a82643ba2c6ccd370dc266",
".git/config": "cd638aa28de4f6878c7e0bdd687ca41f",
".git/objects/6f/2b5ae43308d722f4590f9846d3f8f07352e061": "7c899f2a4821bec440594d6763096b78",
".git/objects/9b/a2071bb74fef4f2c1e4df5572aad7897adc7b2": "5ce8d03d6e78b684a80f94e01ea21e65",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/2b1af45eb5cab5de658c425008e8852cf9b063": "d4cee4a56365a468cc0999c7695fb8e6",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/51/1fe14ebe2cec930799f4e1ccff4cbb7985721a": "1d761a5e24d4957bad51971ced0f9830",
".git/objects/5a/ed9cb6914e376e803a2716642ffcb89b8a2489": "5c04b3e9160be807692309c4e665b664",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b2/b4c58ff97b8f68a9333665e0e6362b84ea982a": "a6a53b5ea8004029617e4f071d2e09ac",
".git/objects/ad/40058160d16851b57596b772e24dbde36cc0a5": "c60c9a6cd23f0480415b660231c8d548",
".git/objects/be/6234004770422fd8bc6c81a8dac79efd14340a": "40c3d0e77234fe0fe6f2a39759357ae4",
".git/objects/df/392da4c854337e2b4d73d47ea0c33d2b89658b": "6d7175d5a64c0a703387643473a2c9a4",
".git/objects/bd/3bfcd96e64e09479c2d630b7a5392cac521c2b": "e0a7fabcba9883dff944f2ce4ec4e5a1",
".git/objects/d1/ef6854956f8ba336e83e9288ca1b0571d748e9": "2a09577f71bb6bbe40395dfb6480aa16",
".git/objects/d1/0698c589ff7f52414c8706df58400367d199d6": "bd1966365594a482a8d007582cdf4d2a",
".git/objects/d8/0285c1ff91258ad8be62aca7b14f10ace40e32": "65c178415802fb82dfd37fb4a253194f",
".git/objects/d8/a9f2a7b7dc9bfe56477f9591b7ba2cff186557": "be40e600958f5b47d9f1b8ca0bcaf74d",
".git/objects/ab/50e73898e1cb42a7bf4acd163d185bd77ec894": "b95b1bb0fb5e0d88d282767b61b47674",
".git/objects/ab/57ced2c750018a6b4b9e435aa8fc4e6acf793c": "4e4ec54e00e8f6c9dc37f4915f18ddb4",
".git/objects/f4/85d5cba72b444f4f9f7b0aefbeeeee5448e133": "68688c82b22f64efd4116a1a436e0e85",
".git/objects/fc/ecf8d6b1799581870ceba1aa862c30f8932972": "239c695a3ca8ed76e06fc0851c4c3991",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/ed/ee5a4784f49db0c53d4c8e4b6624a0b4430540": "1faccbe44e973d51402ae88089eeaf08",
".git/objects/ec/c7a5faebda23024a25f26db427fe6f58780d3a": "5a3118059d6049a12d369feed28bf4f0",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/29/d908d17d171bbbc7b3799eae5917929bc9c703": "bae2d08400c6311ff8aa5144ffdaebd5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/13a33c4e9bb98c8c83bfedde87b49110647db3": "b61adf9f7810be8223b65dca1340dc1b",
".git/objects/43/e4011d6d68c86c0cf6c779e47915d422d17b00": "bf899e081c949c6a35fb76fac7f01f81",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/66389c598228a234348fceba87130643825d17": "af7bf3cc81b83d738dc89d3f18e94c12",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/62/fd830c492e61a2d6d6a52df395c6cf6696612f": "abb4c305cbceae3cea9fa110920be4e5",
".git/objects/96/e198badafa27ccc08752c1f99f5df2dc806585": "5a3ad6b2b20905adf1875feba42780d6",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/5b/587110ba422896a7966d2b57c445ca92982f24": "f62735fab0bc4950b2a5c8a7b8608dbb",
".git/objects/6c/eb38cd16bcfbff372005c00de25acf7dd90926": "182235b5842cc5e3312ef680b4ca9440",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/d4/a1b1f12a8e694273b1c9bc960533238bb1b7ef": "8fa36f8663b6a6373c234c43bd0068db",
".git/objects/a0/9c21fd0b34c8885e532d5c131218c60efb9f02": "72649a125999686d22f4ae605efae703",
".git/objects/b8/262fad22b8397e3f195645579d0e7529be1ae7": "29b6a6ec63513f6ba5e1047edfc59a8c",
".git/objects/dc/ce9887d7303c6513c1cb0362a957eac7dbd5c9": "94bf77b69fffa187160441c897fd46fa",
".git/objects/dc/9fbe52a0b1a8506239c7667ab2d5e3f162fd13": "9302623915239c96b12d753b9340af08",
".git/objects/a9/deddb1a8ad775f389d6f093ee7b692545711ca": "9b31a80ce2828e348d885183acaedd2b",
".git/objects/d5/9ab09f2f2a83f434381a2417106b47c5845448": "2c0b1ba0f888147b80c03812ee16e295",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/1a9b0c1f182416a07f0ab9cd6c75ded3447937": "7a741bedf46d2862061ea3f30f104554",
".git/objects/c4/e0dde28edacc70b28c89c6d80e8adc84ef9b1e": "798c3466cc3277ae293b564f8f26fe35",
".git/objects/c4/0c965acff1e0f08170593168d37b5386d6bd49": "9a734e0ecc4383f48822a5823e3af9a1",
".git/objects/cc/3e16b84ede87338ea10e813f03ffb069fb2740": "b818f99b4ac26c36f1688f411b8a27d8",
".git/objects/f9/7eec3bf21d2dd3df2034bd292332b782ed5d55": "7982eac8d0e9e1cd013544d0f742fe70",
".git/objects/f0/43a8741fc25e75b622d40421c45a881c44121b": "dead16ded67e5f4bb2f5278587b6c9d9",
".git/objects/e7/0060f0ec9c47a9232cb5dc1a625f43b7243a96": "f5a1b103895d2540661a1930feec98e7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/84dfe2e1d8423ce4a2bf8aefc60d63aaa96098": "810fcc5bbba67b51b811bb6ebf0eff78",
".git/objects/4a/7b76d632e9d7b1a0b6052eb30f0ca7df15d287": "5da355c610008c213fdb5a99f45093ad",
".git/objects/4a/17cba02f8cc888b9bde38b3148e834268311b7": "2f3e8ddd592188556e888ce9bd67ec6a",
".git/objects/8d/d79daa4791758588ff2329def9cb1587fc376e": "0d5748515c527f2af6cfb4e7524a88eb",
".git/objects/76/fd703c9d3ec7ed279fd96252eae40051b68ab2": "4e2036dec4c386ab5b75396914198503",
".git/objects/82/ece5b42284e48ca7682f92131dbb40daa082cb": "8f2b19097377bb2e1761d9d1fa631128",
".git/objects/40/5193b02c9c002e9de0327d96e8de329771ec99": "e0050e16d2376ce401cb2ea6b95a8d9a",
".git/objects/8b/377063baa42a88c7d6f2724d73c02d708f373f": "27cc78c487aca16d84fc386a69f21458",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "f8a46ab1bc4f87fb25a311433b4544c4",
".git/logs/refs/heads/master": "f8a46ab1bc4f87fb25a311433b4544c4",
".git/logs/refs/remotes/origin/master": "fed4c2cd127e72dd0f8ce7d8b478d2ce",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "ed83008f425640b77d6f4108cde4aedd",
".git/refs/remotes/origin/master": "ed83008f425640b77d6f4108cde4aedd",
".git/index": "636eb63b0b0455a5fd5c577ec2ba12aa",
".git/COMMIT_EDITMSG": "d404401c8c6495b206fc35c95e55a6d5",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/NOTICES": "20db6d0fd7717b3c92c8a1754cd0bfc4",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
