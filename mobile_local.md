

## Troubleshoot plateformes mobiles

Cette rubrique contient des liens vers des discussions concernant l'installation en local des bibliothèques de déploiement mobile et ne concerne pas l'utilisation de phonegap.

### Android

Pour android il faut bien faire attention à travailler avec java 8
https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html

https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html

https://github.com/ionic-team/ionic-cli/issues/3115#issuecomment-456413405

Faites bien attention à n'avoir qu'un seul jdk installé et d'avoir mis en place les variables d'environement nécessaires.

#### sous Mac
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

### Problèmes relatifs à iOS

Avant de pouvoir cibler ios, il faut :

- avoir installé Xcode
- avoir installé les outils de ligne de commande

et avoir installé les paquets node suivant

```
npm install -g ios-sim
npm install -g ios-deploy
```

https://cordova.apache.org/docs/fr/latest/guide/platforms/ios/