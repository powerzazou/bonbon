# Contribution : manuel utilisateur

## Pré-requis

 ### Filezilla 
 C'est le client FTP, nécessaire pour se connecter a ton serveur OVH. Tu peux le télécharger [ici](https://filezilla-project.org/)  
 **Attention a bien lire les boites de dialogues pendant l'installation**. Par défaut ça installe aussi des trucs relous (genre bing search et cie) donc prendre le temps de décocher les cases correspondantes avant de faire "next" ;)

 ### Visual Studio Code (VSCode)
C'est un éditeur de code gratuit. Probablement le meilleur a l'heure actuelle (hé oui, Microsoft sait faire des trucs biens des fois :D). Tu peux le télécharger [ici](https://code.visualstudio.com/)  
Ce n'est pas obligatoire, mais c'est quand même top pour y voir clair dans le fichier JSON que tu devras éditer pour mettre a jour les projets. Puis ça t'évitera des mauvaises surprises d'encodage, donc je te le recommande vivement :) 

## Mode opératoire

### 1-Connexion au FTP

 * Ouvrir FileZilla, puis le gestionnaire de site (via le menu Fichier->Gestionnaire de site)
 * Créer un "Nouveau Site" et renseigner les paramètres suivants
     * Hôte : ftp.cluster011.ovh.net
     * Protocole : FTP
     * Chiffrement : Connexion FTP explicite sur TLS si dispo
     * Type d'authentification : Compte
     * Identifiant : paulinemuz
     * Mot de passe : celui d'OVH que tu m'a filé par mail :p (#mecsecure)
     * Compte : paulinemuz
 * Cliquer sur connexion (lors des prochaines connexions, les params auront été sauvegardés, donc on l'étape d'avant c'est juste la premiere fois )

 Te voila maintenant connecté au serveur :) Dans la colone de droite tu peux naviguer sur son espace de stockage. (a gauche c'est tes fichiers locaux). Concrêtement : 
 ![alt text](filezilla.jpg "Filezilla")

 Apres c'est assez simple : 
 * tu cliques sur www pour ouvrir le dossier
 * tu cliques sur projets.js pour télécharger le fichier chez toi (il appraitra alors dans la colone de gauche)
 * tu ouvres le fichier avec VSCode, tu édites (voir chapitre suivant) puis tu sauvegardes
 * enfin, tu renvois sur le serveur (double click sur le fichier dans la colone de gauche)


### 2-Mise a jour des projets
Le gros du travail se fait en modifiant le fichier "projects.js" présent dans le répertoire sobrement intitulé "public".

Chaque projet se présente sous la forme suivante :

```javascript
    {
        id: 6,
        order: 1,
        title: 'La Compagnie de l\'Absinthe',
        accroche: {
            image: '/images/projects/PROJET_6/PROJET6_COUVERTURE_510x340.jpg',
            catchPhrase: 'Diluvienne',
            type: 'Direction artistique <br/> Affiche <br/> Dossier de Presse',
            brand: 'Brand: La Compagnie de l\'Absinthe',
            year: '2016',
        },
        text: 'Une jeune compagnie indépendante a monté un nouveau spectacle. Je vous promet qu’il est chouette.',
        carousel: [
            '/images/projects/PROJET_6/PROJET6_SLIDER1_1400x900.jpg',
            '/images/projects/PROJET_6/PROJET6_SLIDER2_1400x900.jpg',
            '/images/projects/PROJET_6/PROJET6_SLIDER3_1400x900.jpg',
            '/images/projects/PROJET_6/PROJET6_SLIDER4_1400x900.jpg',
            '/images/projects/PROJET_6/PROJET6_SLIDER5_1400x900.jpg'
        ]
    },
```
Tu peux en ajouter un en copiant/collant ce bloc (pense juste a ajouter une virgule apres l'accolade fermante de chaque projet, sauf le dernier ^^)  

D'ailleurs attention a la syntaxe en général, tous les caractères sont importants :p Et si tu veux mettre du texte contenant un apostrophe, il faut précéder l'apostrophe d'un antislash (sinon c'est la fin de la chaine), comme dans l'exemple ci dessus pour le champ **brand**

Dans le détail, voici a quoi correspond chaque champ d'un projet : 
 * **id** correspond à l'identifant du projet. Pour l'instant, il faut simplement s'assurer que c'est un chiffre et qu'il est unique
 * **order** correspond à l'ordre d'affichage du projet sur la home; Il faut que ça soit un chiffre, il peut être positif ou négatif, il peut y avoir des trous, le code se contente d'ordonner les projets du plus petit au plus grand. En cas d'égalité entre deux projets, pas de gros soucis, le premier de la liste sera affiché, tout simplement...
 * **title** plus utilisé... a supprimer ...
 * **image** C'est l'image d'accroche affiché en homepage. Le gabarit recommandé est 510x340px
 * **catchPhrase** [Supporte HTML] C'est un peu le titre du projet, c'est affiché uniquement sur l'accoche
 * **type** [Supporte HTML] le/les labels associés au projet. Affiché sur l'accoche et sur la page projet
 * **brand** La marque, affichée sur l'accroche et la page projet
 * **brandExtra** [Supporte HTML] cet extra ne sera affiché que sur la page projet (et pas sur l'accroche, cf BLUEZONE) 
 * **year** l'année du projet, tout simplement. Affiché sur l'accoche et sur la page projet
 * **text** La description longue du projet, affichée uniquement sur la page projet
 * **carousel** La liste des images affichées sur la page projet. L'ordre d'écriture est important, car il correspond tout simplement a l'ordre d'affichage dans le slider. Le gabarit conseillé est de 1100x707px (d'ailleurs faudrait qu'on revoie a nomer les images avec le bon gabarit parce que là c'est trompeur)

 **Pour "image" et "carousel", il faut que la chaine de caractère corresponde au chemin de l'image par rapport au fichier "projects.js". En gros tu veux une image "AAA.jpg" qui se trouve dans le dossier "images/lettres/la_lettreA" bah tu mets image: "images/lettres/la_lettreA/AAA.jpg"; tout simplement**

 **NB** : les champs ayant le label [Supporte HTML] peuvent embarquer des balises html pour faire un peu de mise en forme, au besoin. Voici une liste non-exhaustive de celles qui peuvent être utiles :
 * ```<br />``` Permet de sauter une ligne entre deux mots
 * ```<a href="http://paulinemidon.tumblr.com/" target="_blank" style="text-decoration:underline">Découvrir les animations</a>``` Permet de faire un lien
 * ```<span style="color: #ffffff;"> mon texte en blanc </span>``` permet de décorer une partie du texte. On peut mettre n'importe quel css dans l'attribut "style" et ainsi facilement faire du souligné, gras, italic, coloré :) 

Evidemment je suis a dispo pour t'aider si tu as d'autres besoins en terme de HTML/CSS ;) 

Dernier point, mais non des moindre, les images : il suffit d'aller écraser ou ajouter tes fichiers au bon endroit.  
Aujourd'hui l'arborescence est plutot clean : 
 * **images** contient toutes les images du site
     * **projets** contient toutes les images relatives aux projets
        * **PROJET_X** contient toutes les images du projet x (1 repertoire par projet donc)
     * **slider** c'est juste pour les flêches du slider, pas besoin d'y toucher ^^

Je te conseille simplement de maintenir ça clean :) Si tu veux échanger une image, nomme la nouvelle comme celle que tu veux remplacer :) Si tu veux en ajouter une, tu l'upload a l'endroit souhaité et tu rajoute simplement la ligne correspondante dans le champ **carousel** du projet ;)

### 3-Upload des fichiers a jour
 * les images d'abord
 * le fichier projects.js ensuite
 * normalement tu n'as plus qu'a ouvrir ton site et faire pomme+R pour rafraichir la page, et c'est tout bon, tu dois avoir tes mises a jour :) 

## Rollback (en cas de soucis)
Si jamais le site plante (page blanche, erreur, truc moche)

 * ouvrir filezilla et se connecter au site
 * se placer dans le repertoire backup_14_02_2018 et tout télécharger (fichiers et dossiers)
 * se placer dans le repertoire www, tout supprimer puis uploader tous le contenu du répertoire backup
 * normalement c'est tout bon... Sinon appeler Vincent :( 