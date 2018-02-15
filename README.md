## Pré-requis
 * CLI git
 * Node/NPM (8.9.4 LTS c'est OK)
 * Connaitre React :) 

## Installation 

``` bash
# récupération du code source
git clone https://github.com/powerzazou/bonbon.git

# installation des dépendences
npm install
```

**Attention** : pour des questions de simplicité, les assets graphiques ont été gittés, le clone initial peut donc prendre un peu de temps... Ne soyez pas surpris

## Commandes disponnibles

``` bash
# lancer l'environnement de dev local (ouvre direct le naviagteur par defaut sur le localhost:3000, avec live reload)
npm start

# generer le build
npm run build

# lancer les tests
# bon pour l'instant y'en a pas, mais a faire un jour ... eventuellement
npm test
```

## Fonctionnement du projet
Le projet est basé sur le bootstrap React [create-react-app.](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#installing-a-dependency)  
Ne pas hésiter a consulter la doc du bootstrap, elle est assez fournie et contient pas mal de tips utiles :) 

La petite particularité est que les assets graphiques ainsi que les données projets (projets.js) sont incluses dans le dossier public (donc pas compilé/minifié/etc). Cela afin de permettre l'édition de ses ressources simplement via FTP (a l'ancienne :D) sans avoir a recompiler le projet :)  

Noter aussi l'ajout de react-router et d'une lib pour le carousel des pages projets, histoire de rester simple :) 

## Mise en prod
Pour mettre en prod sur OVH, le plus simple est de passer par un client FTP. Au préalable il faut bien sur générer le build : 

``` bash
npm run build
```
Ensuite envoyer le contenu du dossier "build" dans le repertoire www, tout simplement

Pour avoir un envir' de recettage (hors local), on peut utiliser [Surge](https://surge.sh/) assez simplement. Il faut d'abord créer un compte puis

``` bash
# install de surge, a faire une fois uniquement
npm install -g surge

# le build, a faire a chaque fois
npm run build

# renomage de l'index en 200, pour que react-router fonctionne comme il faut
mv ./build/index.html ./build/200.html

# et on déploie, dans la joie et l'allegresse :) 
surge

# dans le dialog surge mettre project path vers le dossier build
project path: /path/to/project/build
```
