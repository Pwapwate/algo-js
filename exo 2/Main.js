// classe personnage
// instanciation de 5 perso, 1 tueur , 5 survivants
// parametre et caractéristique cliché
// parametre de hp 100 pts de vie
// parametre avec probabilité de mourir , de mettre de degats  et de mourir en mettant des degats
// while tueur not mort
// soit le survivant meurt, esquive et met 10 de degats soit inflige 15 de degats mais meurs

// console log les morts a la fin
// console log pour chaque action
// xx a tué xx / esquivé / infligé  TANT DE DEGATS // XX est mort, les survivant ont gagné mais ont perdu
// variable mort
// Definition Classe pour les personnages et Jason
class survivant {
  constructor(prenom, hp, cara, prbMourir, prbDegats, prbMourirDegats) {
    this.prenom = prenom;
    this.hp = hp;
    this.cara = cara;
    this.prbMourir = prbMourir;
    this.prbDegats = prbDegats;
    this.prbMourirDegats = prbMourirDegats;
  }
}
class tueur {
  constructor(prenom, hp) {
    this.prenom = prenom;
    this.hp = hp;
  }
}
// Definition fonction pour obtenir une valeur dans la range donnée
function getRand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function getFloat(min, max) {
  return Math.random() * (max - min) + min;
}
// Definition des variables neccessaires pour la creation des personnages
var nom = ["Jean", "Paul", "Louis", "Flore", "Anaîs"];
var caractéristique = ["sportif", "drole", "chatoyant", "gentil", "geek"];
var proba = [
  [0.3, 0.1, 0.6],
  [0.4, 0.5, 0.1],
  [0.5, 0.1, 0.4],
  [0.2, 0.6, 0.2],
  [0.3, 0.3, 0.4],
];

function getAction(survivant) {
  test = getFloat(0, 1)*100;
  console.log(test)
  val1 = survivant.prbDegats*100;
  console.log(val1,'val 1')
  val2 = val1 + survivant.prbMourir*100;
  console.log(val2,'val 2')
  val3 = val2 + survivant.prbMourirDegats*100;
  console.log(val3,'val 3')
  action = "";
  if (test >= val1) {
    if (test >= val2) {
      action = "Degats et mourir";
    } else {
      action = "Esquive et dégats";
    }
  } else {
    action = "Mourir";
  }
  console.log(action)
}

// Instanciation du perso 1
// Obtenir les index pour le nom et pour la caracteristique
let indexP1 = getRand(0, 5);
indexNom = getRand(0, 4);
// definition variable nom
a = nom[indexNom];
// retirer le nom utilisé de la liste
nom.splice(indexNom, 1);
// definition variable caracteristique
b = caractéristique[indexP1];
//retirer la caractersitique utilisée de la liste
caractéristique.splice(indexP1, 1);
//definition des probabilités correspondantes a la caracteristique
c = proba[indexP1][0];
d = proba[indexP1][1];
e = proba[indexP1][2];
// retirer les proba utilisées du tableau
proba.splice(indexP1, 1);
// creation personnage
let perso1 = new survivant(a, 100, b, c, d, e);

// Instanciation du perso 2
let indexP2 = getRand(0, 4);
indexNom = getRand(0, 3);
a = nom[indexNom];
nom.splice(indexNom, 1);
b = caractéristique[indexP2];
caractéristique.splice(indexP2, 1);
c = proba[indexP2][0];
d = proba[indexP2][1];
e = proba[indexP2][2];
proba.splice(indexP2, 1);
let perso2 = new survivant(a, 100, b, c, d, e);

// Instanciation du perso 3
let indexP3 = getRand(0, 3);
indexNom = getRand(0, 2);
a = nom[indexNom];
nom.splice(indexNom, 1);
b = caractéristique[indexP3];
caractéristique.splice(indexP3, 1);
c = proba[indexP3][0];
d = proba[indexP3][1];
e = proba[indexP3][2];
proba.splice(indexP3, 1);
let perso3 = new survivant(a, 100, b, c, d, e);

// Instanciation du perso 4
let indexP4 = getRand(0, 2);
indexNom = getRand(0, 1);
a = nom[indexNom];
nom.splice(indexNom, 1);
b = caractéristique[indexP4];
caractéristique.splice(indexP4, 1);
c = proba[indexP4][0];
d = proba[indexP4][1];
e = proba[indexP4][2];
proba.splice(indexP4, 1);
let perso4 = new survivant(a, 100, b, c, d, e);

// Instanciation du perso 5
let indexP5 = getRand(0, 1);
indexNom = getRand(0, 0);
a = nom[indexNom];
nom.splice(indexNom, 1);
b = caractéristique[indexP5];
caractéristique.splice(indexP5, 1);
c = proba[indexP5][0];
d = proba[indexP5][1];
e = proba[indexP5][2];
proba.splice(indexP5, 1);
let perso5 = new survivant(a, 100, b, c, d, e);

let Assassin = new tueur('Jason', 100);
console.log(perso1, perso2, perso3, perso4, perso5);
// pour les get rand faire -1 a chaque nouveau perso pour la taille de la liste)
while (tueur.hp >= 0) {
  if (perso1.hp > 0) {
  }
}

getAction(perso1)