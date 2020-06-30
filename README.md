# Introduction Cordova

Cordova permet de construire des application à partir de code javascript :
- des applications web
- des applications electron pour les différents systèmes d'exploitation d'ordinateur existant.
- des applications pour smartphone : android et ios.

Tout cela théoriquement avec une seule base de code.

L'installation et la configuration demandent des notions de manipulation de l'outil informatique relativement avancées. La construction d'application pour ordinateurs de bureau est relativement simple, le déploiement sur mobile peut lui s'avérer sensiblement plus complexe même si la surcouche **PhoneGap** simplifie grandement les choses notament sur Android.

Pour suivre ce guide il vous faudra des notions de bases sur :
- HTML / CSS / JS
- Github (pour PhoneGap)
- NodeJS (pour Cordova)

Si vous vous posez la question de savoir si cordova est adapté à votre projet vous pouvez consulter le lien ci-dessous : 
https://www.codementor.io/@marcusparsons/should-i-build-an-app-using-phonegap-mpzg5lt2r

Une ressource cordova en anglais est aussi disponible en suivant ce lien :
https://github.com/jameshosken/itpcamp2017/blob/8e2dc979c9c350599ef0201324e7c814001682f5/p5-on-the-phone/readme.md

## Cordova ?

### Installation

Il est nécessaire d'installer nodejs :
https://nodejs.org/fr/

(préférez la dernière version LTS)

Une fois node installé l'installation est relativement simple si l'on vise les navigateurs :
https://cordova.apache.org/#getstarted

```
npm install -g cordova
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


### Phonegap pour les applications mobiles

Phonegap est une surcouche développée par Adobe pour faciliter le developpement et le déploiement d'applications iOS et Android.

https://phonegap.com/getstarted/

Phonegap se base sur une application desktop fonctionnant conjointement avec une application smartphone, communicant entre elles via wifi et permettant de simplifier le process de test.

https://community.adobe.com/t5/phonegap-build/phonegap-desktop-installation-error/td-p/9832282?page=1&profile.language=fr

Phonegap propose ensuite un système de build entièrement en ligne ne nécessitant l'installation d'aucune bibliothèque.

https://build.phonegap.com/

Il faut pour cela avoir publier son code dans un dépôt github et pointer le système de build vers celui-ci. 

Il est nécessaire de n'avoir qu'une seule application sur ce dépôt. Attention aussi il n'est pas nécessaire de publier l'intégralité des fichier fournis par Phonegap au moment de la création de l'application - en effet une bonne quantité est générée par phonegap.

A ce titre il est préférable d'ajouter ces quelques lignes à votre fichier *.gitginore*, avant de pousser vos modifications.

```
*./platforms
*./plugins
*./hooks
*./.cordova
```

Vous pourrez alors créer des applications pour android gratuitement et pour iOS moyenant la somme de 99€ par an (coût d'un compte developper apple permettant de signer ses applications).


## Customisation de l'application

### Cordova

Tout est intégré dans votre dossier applicatif nommé */www*

Dans le dossier racine vous pouvez éditer le fichier *config.xml*, avec un nouveau nom, une description appropriée et des renseignement sur l'auteur.

Vous pouvez ensuite modifier/ remplacer le logo dans le dossier */img*.

### PhoneGap

De la même façon tout est intégré dans votre dossier applicatif nommé */www*

Dans le dossier racine vous pouvez éditer le fichier *config.xml*, avec un nouveau nom, une description appropriée et des renseignement sur l'auteur.

Vous pouvez ensuite modifier/ remplacer le logo dans le dossier */img*.

Les icônes aux différentes tailles seront stockés dans le dossier */res*



