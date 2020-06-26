# Introduction Cordova

Cordova permet de construire des application à partir de code javascript :
- des applications web
- des applications electron pour les différents systèmes d'exploitation d'ordinateur existant.
- des applications pour smartphone : android et ios.

Tout cela théoriquement avec une seule base de code.

L'installation et la configuration demandent des notions de manipulation de l'outil informatique relativement avancées.


## Instalation

Il est nécessaire d'installer nodejs

https://nodejs.org/fr/

(préférez la dernière version LTS)

Une fois node installé l'installation est relativement simple si l'on vise les navigateurs

https://cordova.apache.org/#getstarted

```
npm install -g cordova
```

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

Pour android il faut bien faire attention à travailler avec java 8
https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html

https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html

https://github.com/ionic-team/ionic-cli/issues/3115#issuecomment-456413405

Faites bien attention à n'avoir qu'un seul jdk installé et d'avoir mis en place les variables d'environement nécessaires.


## Executer les exemples

Naviguer dans le dossier de l'exemple

Pour exécuter l'application navigateur :
```
sudo cordova run browser
```

Pour exécuter l'application électron :
```
sudo cordova run electron
```

Pour exécuter l'application android :
```
sudo cordova run android
```

