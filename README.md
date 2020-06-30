# Introduction Cordova

Cordova permet de construire des application à partir de code javascript :
- des applications web
- des applications electron pour les différents systèmes d'exploitation d'ordinateur existant.
- des applications pour smartphone : android et ios.

Tout cela théoriquement avec une seule base de code.

L'installation et la configuration demandent des notions de manipulation de l'outil informatique relativement avancées. La construction d'application pour ordinateurs de bureau est relativement simple, le déploiement sur mobile peut lui s'avérer sensiblement plus complexe.

Si vous vous posez la question de savoir si cordova est adapté à votre projet vous pouvez consulter le lien ci-dessous : 
https://www.codementor.io/@marcusparsons/should-i-build-an-app-using-phonegap-mpzg5lt2r

Une ressource cordova en anglais est aussi disponible en suivant ce lien :
https://github.com/jameshosken/itpcamp2017/blob/8e2dc979c9c350599ef0201324e7c814001682f5/p5-on-the-phone/readme.md

## Comment commencer ?

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

Pour android : 
```
sudo cordova platform add android
```

Pour ios : 
```
sudo cordova platform add ios
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

Pour exécuter l'application android :
```
sudo cordova run android
```

### Phonegap

Phonegap est une surcouche développée par Adobe pour faciliter le developpement et le déploiement d'applications iOS et Android.

https://phonegap.com/getstarted/

Phonegap se base sur une application desktop fonctionnant conjointement avec une application smartphone, communicant entre elles via wifi et permettant de simplifier le process de test.


https://community.adobe.com/t5/phonegap-build/phonegap-desktop-installation-error/td-p/9832282?page=1&profile.language=fr


## Problèmes relatifs à android


Pour android il faut bien faire attention à travailler avec java 8
https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html

https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html

https://github.com/ionic-team/ionic-cli/issues/3115#issuecomment-456413405

Faites bien attention à n'avoir qu'un seul jdk installé et d'avoir mis en place les variables d'environement nécessaires.

### Mac
Sous mac il peut être nécessaire de mettre à jour le fichier système caché *bash_profile*

à l'aide de la commande :

```
sudo nano ~/.bash_profile
```

Il faut ajouter à ce fichier les chemins vers les répértoires d'installation de java et du sdk d'android : 

```
export JAVA_HOME=Library/Internet\ Plug-Ins/JavaAppletPlugin.plugin/Contents/Home/bin/java

export ANDROID_HOME=/Users/b.recoules/Library/Android/sdk

export PATH=${PATH}:/Users/b.recoules/Library/Android/sdk/platform-tools:/Users/b.recoules/Library/Android/sdk/tools
```

## Problèmes relatifs à iOS

Avant de pouvoir cibler ios, il faut :

- avoir installé Xcode
- avoir installé les outils de ligne de commande

et avoir installé les paquets node suivant

```
npm install -g ios-sim
npm install -g ios-deploy
```

https://cordova.apache.org/docs/fr/latest/guide/platforms/ios/