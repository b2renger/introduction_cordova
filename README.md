# JS to apps

Cette ressource vise à détailler les différentes solutions existantes permettant à partir d'une base de code en JS-HTML-CSS de construire des applications executables sur différentes plateformes et donc de passer d'un format *page web* (çad exectutable dans un navigateur à partir d'un adresse) à un format *applicatif* (çad une application excutable à partir d'un clic sur un icone) soit sur ordinateur, soit sur smartphones et tablettes. Tout cela théoriquement avec une seule base de code.

Trois solutions permettent de constuire différents types d'application :
- Cordova : permet de constuire tout type d'applications. Dans les faits nous nous contenrons de la possibilité de créer des applications pour windows, mac os et linux.
- PhoneGap : la solution la plus simple pour construire une application **android**.
- Progressive Web App (ou PWA) : qui est en réalité plus une norme permettant de *packager* un page web afin de l'éxecuter comme une application pour **android** et **iOS**.

Pour suivre ce guide il vous faudra des notions de bases sur :
- HTML / CSS / JS 
- Github (pour PhoneGap)
- NodeJS (pour Cordova)

Il est à noter que ce type de techniques n'est pas à l'épreuve des balles pour tout type d'applications. Les applications avec une consommation de ressources intensives (jeux vidéo, application de traitement vidéo / photo, application 3D etc ...) peuvent se révéler être un réel challenge à developper de cette manière; il est parfois préférable de passer par des solutions natives.

Des exemples seront fournis avec 3 types d'outils :
- HTML CSS JS
- [p5js](https://p5js.org/)
- [cablesgl](https://cables.gl/home)
- [AFrame](https://aframe.io/) web ar et webWR

## Contenu

* [Cordova](#Cordova)
* [PhoneGap](#PhoneGap)
* [PWA](#PWA)
* [Capacitor](#Capacitor)

## Cordova

Cordova permet de construire des application à partir de code javascript :
- des applications web
- des applications electron pour les différents systèmes d'exploitation d'ordinateur existant.
- des applications pour smartphone : android et ios.

L'installation et la configuration demandent des notions de manipulation de l'outil informatique relativement avancées. La construction d'application pour ordinateurs de bureau est relativement simple, le déploiement sur mobile peut lui s'avérer sensiblement plus complexe même si la surcouche **PhoneGap** simplifie grandement les choses notament sur Android.

Si vous vous posez la question de savoir si cordova est adapté à votre projet vous pouvez consulter le lien ci-dessous : 
https://www.codementor.io/@marcusparsons/should-i-build-an-app-using-phonegap-mpzg5lt2r

Une ressource cordova en anglais est aussi disponible en suivant ce lien :
https://github.com/jameshosken/itpcamp2017/blob/8e2dc979c9c350599ef0201324e7c814001682f5/p5-on-the-phone/readme.md

### Installation

Il est nécessaire d'installer nodejs :
https://nodejs.org/fr/

(préférez la dernière version LTS)

Une fois node installé l'installation est relativement simple si l'on vise les navigateurs :
https://cordova.apache.org/#getstarted

```
npm install -g cordova
```

### Créer un projet

```
cordova create hello com.example.hello HelloWorld
```

### Ajout de plateformes de déploiement

Afin de pouvoir installer construire des appli electron et android, il peut-être nécessaire d'autoriser l'exécution de paquets 'unsafe'

```
sudo npm config set unsafe-perm true
```

Ensuite il faut ajouter des platformes de déploiement :

Pour le navigateur : 
```
sudo cordova platform add browser
```

Pour electron : 
```
sudo cordova platform add electron
```


### Executer les exemples

Le code fournit ici n'est que le code applicatif c'est à dire que ce n'est pas l'ensemble du dossier généré par cordova. Cela signifie qu'il faut d'abord générer un nouveau projet avec les lignes de commande ci-dessus puis copier le code fourni dans le dossier 'www' du dossier créée par cordova. Ensuite il suffi de lancer l'application pour la plateforme désirée en :

- naviguant dans le dossier concerné.
- lançant les lignes de commande ci-dessous.

Pour exécuter l'application navigateur :
```
sudo cordova run browser
```
Pour exécuter l'application électron :
```
sudo cordova run electron --release
```
Le tag release permet de cacher la console de debuggage javascript qui s'affiche par défaut.

### Customisation 

Tout est intégré dans votre dossier applicatif nommé */www*

Dans le dossier racine vous pouvez éditer le fichier *config.xml*, avec un nouveau nom, une description appropriée et des renseignement sur l'auteur.

Vous pouvez ensuite modifier/ remplacer le logo dans le dossier */img*.


## PhoneGap

Phonegap est une surcouche développée par Adobe pour faciliter le developpement et le déploiement d'applications iOS et Android.

https://phonegap.com/getstarted/

Phonegap se base sur une application desktop fonctionnant conjointement avec une application smartphone, communicant entre elles via wifi et permettant de simplifier le process de test.

https://community.adobe.com/t5/phonegap-build/phonegap-desktop-installation-error/td-p/9832282?page=1&profile.language=fr

Phonegap propose ensuite un système de build entièrement en ligne ne nécessitant l'installation d'aucune bibliothèque.

https://build.phonegap.com/

Il faut pour cela avoir publier son code dans un dépôt github et pointer le système de build vers celui-ci. 

Il est nécessaire de n'avoir qu'une seule application sur ce dépôt. Ou si vous êtes suffisament à l'aise avec github, il est possible de publier le code de différentes applications dans différentes branches et donc au moment de builder l'application de pointer vers une branche spécifique.

Attention aussi il n'est pas nécessaire de publier l'intégralité des fichier fournis par Phonegap au moment de la création de l'application - en effet une bonne quantité est générée par phonegap.

A ce titre il est préférable d'ajouter ces quelques lignes à votre fichier *.gitignore*, avant de pousser vos modifications.

```
*./platforms
*./plugins
*./hooks
*./.cordova
```

Vous pourrez alors créer des applications pour android gratuitement et pour iOS moyenant la somme de 99€ par an (coût d'un compte developper apple permettant de signer ses applications).

### Customisation de l'application

De la même façon tout est intégré dans votre dossier applicatif nommé */www*

Dans le dossier racine vous pouvez éditer le fichier *config.xml*, avec un nouveau nom, une description appropriée et des renseignement sur l'auteur.

Vous pouvez ensuite modifier/ remplacer le logo dans le dossier */img*.

Les icônes aux différentes tailles seront stockés dans le dossier */res*


## PWA 


https://medium.com/james-johnson/a-simple-progressive-web-app-tutorial-f9708e5f2605
https://codelabs.developers.google.com/codelabs/your-first-pwapp/#0


### cablesgl

Export as single file js.

 - Modify index.html for accesibility stuff

    ```html
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta itemprop="name" content="cablesgl Seethrough vr">
    <meta itemprop="description" content="made with cables">
    <meta itemprop="image" content="screenshot.png">
    <meta name="description" content="made with cables" />
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="black">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="Seethrough VR">
    <meta name="msapplication-TileImage" content="icons/icon-144.png">
    <meta name="msapplication-TileColor" content="#000000">
    ```

-  add manifest.json

```json
{
"name": "cables pwa seethrough vr",
"short_name": "cables",
"start_url": ".",
"icons": [{
    "src": "icons/Icon-96.png",
      "sizes": "96x96",
      "type": "image/png"
    }, {
      "src": "icons/Icon-144.png",
      "sizes": "144x144",
      "type": "image/png"
    }, {
      "src": "icons/Icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },{
      "src": "icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }],
"lang": "en",
"display": "standalone",
"background_color": "black",
"theme_color": "black"
}
```

- create main.js

```js
window.onload = () => {
'use strict';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('./sw.js');
    }
}
```

- create sw.js

```js
var cacheName = 'cables-pwa-arvr';
var filesToCache = [
        '/',
        './index.html',
        './main.js',
        'js/patch.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).the(function (cache) {
            return cache.addAll(filesToCache);
            })
    );
});

/* Serve cached content when offline */
self.addEventListener("fetch", function(event) {
    event.respondWith(
      caches.open('file-cache').then(function(cache) {
        return cache.match(event.request).then(function (response) {
            if(response) {
                return response;
            }else{
                return fetch(event.request).then(function(response) {
                  cache.put(event.request, response.clone());
                  return response;
            });
            }
        });
        })
    );
});
```

- add main.js to your index.html's body
```html
 <script src="main.js"></script>
 ```
- run lighthouse from the developper tools in chrome and you should get the badge !
- publish to the web !




## Capacitor

https://capacitorjs.com/