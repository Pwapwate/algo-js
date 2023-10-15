// 119 Lignes sans commentaires

//Definition de la classe des survivants
class Survivant {
  constructor(prenom, cara, prbMourir, prbDegats, prbMourirDegats, etat) {
    this.prenom = prenom;
    this.cara = cara;
    this.prbMourir = prbMourir;
    this.prbDegats = prbDegats;
    this.prbMourirDegats = prbMourirDegats;
    this.etat = etat;
  }
}
//Definition de la classe du tueur
class Tueur {
  constructor(prenom, vie) {
    this.prenom = prenom;
    this.vie = vie;
  }
}
//Definition d'une fonction pour obtenir (en int/entier) des indexs aléatoire pour chaque instanciation ou juste un chiffre aléatoire dans une range
function getRand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//Definition d'une fonction pour obtenir une action en fonction des probas du survivant qui doit agir, sous forme de % --> les probas des survivants s'additionnent toutes a 1
function getAction(survivant) {
  // Mettre les proba sous forme de % ( sert a rien dans le code mais plus claire (pour moi) )
  const test = Math.random() * 100;
  const val1 = survivant.prbDegats * 100;
  const val2 = val1 + survivant.prbMourir * 100;
  // Si la valeur aléatoire est superieur a la val de la proba de Mourir :
  if (test >= val1) {
    // tester si elle est superieur a la valeur de la proba d'attaquer et mourir
    if (test >= val2) {
      // Renvoyer la valeur 1 pour -> -10hp a Jason et meurt
      return 1;
    } else {
      // Sinon renvoyer la valeur 2 pour -> Esquive et -15hp a Jason
      return 2;
    }
  } else {
    // Sinon renvoyer la valeur 3 pour -> Meurt
    return 3;
  }
}
// Creation de constante pour personnage alétoires
const noms = ["Jean", "Paul", "Louis", "Flore", "Anaïs"];
// Creation de constante pour caracteristiques alétoires
const caracteristiques = ["sportif", "drole", "chatoyant", "gentil", "geek"];
// Creation de constante pour probabilités alétoires
const proba = [
  [0.3, 0.1, 0.6],
  [0.4, 0.5, 0.1],
  [0.5, 0.1, 0.4],
  [0.2, 0.6, 0.2],
  [0.3, 0.3, 0.4],
];
// Constante pour stockage de nos futurs survivants
const survivants = [];
// Variable pour la range de la boucle
let a = 5;
// Boucle pour instanciation des survivants
// Effectuer la boucle 5 fois
for (let a = 0; a < 5; a++) {
  // Obtenir les index avec le getRand
  const indexNom = getRand(0, noms.length);
  const indexCara = getRand(0, caracteristiques.length);
  // Definition des constantes en fonction de l'indice aléatoire
  // En enlevant la valeur de la constante d'où elle est prise pour l'assigner a la nouvelle constante grace au .splice
  const prenom = noms.splice(indexNom, 1)[0];
  const cara = caracteristiques.splice(indexCara, 1)[0];
  const [prbMourir, prbDegats, prbMourirDegats] = proba.splice(indexCara, 1)[0];
  // Intanciatiation d'un nouveau survivant
  const survivant = new Survivant(
    prenom,
    cara,
    prbMourir,
    prbDegats,
    prbMourirDegats,
    "vivant"
  );
  // Ajouter le nouveau survivant a la constante survivants pour pouvoir les stocker
  survivants.push(survivant);
}

// Def de variable pour les survivants morts pour le message de fin
let surMorts = "";
// Instanciation de Jason
const jason = new Tueur("Jason", 100);
// D = compteur de survivants morts
let d = 0;

// Boucle qui permet de réaliser les actions entre les survivants et Jason
while (jason.vie > 0 && survivants.length > 0) {
  for (let i = survivants.length - 1; i >= 0; i--) {
    // Casse la boucle si Jason n'a plus de vie (le while devrait s'suffire mais ca ne fonctionne pas correctement...)
    if (jason.vie <= 0) {
      break;
    }
    // Definition de quel survivant va avoir une action
    const survivant = survivants[i];
    // Verification que le survivant est toujours vivant (dans le cas d'une deuxieme (voir plus) action)
    if (survivant.etat === "vivant") {
      // Obtenir une action (1,2 ou 3)
      let action = getAction(survivant);
      // Action 1 == Degat puis Meurt 
      if (action === 1) {
        // Adaptation des pv de Jason
        jason.vie -= 10;
        console.log(
          `${survivant.prenom} a infligé 10pts de dégâts à Jason avant de mourir. Jason n'a plus que ${jason.vie} points de vie.`
        );
        // +1 Au compteur de mort
        d += 1;
        // Condition juste pour la syntaxe de message de fin pour le message de fin
        // Ajout du nom du survivant a la liste des survivants morts
        if (d === 4) {
          surMorts += "et " + survivant.prenom + ".";
        } else {
          surMorts += survivant.prenom + ", ";
        }
        // Changement de son état pour qu'il ne puisse plus validé le if etat===vivant
        survivant.etat = "mort";
        // L'enlever de la liste des surivants qui peuvent agir
        survivants.splice(i, 1);
        // Action 2 == Esquive puis Degats
      } else if (action === 2) {
        // Adaptation des pv de Jason
        jason.vie -= 15;
        console.log(
          `${survivant.prenom} a esquivé l'attaque de Jason et lui a infligé 15pts de dégâts. Jason n'a plus que ${jason.vie} points de vie.`
        );
        // Action 3 == Meurt
      } else {
        console.log(
          `${survivant.prenom} n'a pas réussi à se défendre et est mort sous les coups de Jason.`
        );
        // +1 Au compteur de mort
        d += 1;
        // Condition juste pour la syntaxe de message de fin pour le message de fin
        // Ajout du nom du survivant a la liste des survivants morts
        if (d === 4) {
          surMorts += "et " + survivant.prenom + ".";
        } else {
          surMorts += survivant.prenom + ", ";
        }
        // Changement de son état pour qu'il ne puisse plus validé le if etat===vivant
        survivant.etat = "mort";
        // L'enlever de la liste des surivants qui peuvent agir
        survivants.splice(i, 1);
      }
    }
  }
}
// Message de fin
// Message de victoire de Jason
// Verification par le compteur de morts que les 5 survivants sont bien morts
if (d === 5) {
  console.log("Jason a donc réussi à tuer tout les survivants");
// Message de victoire des survivants avec, le nombre de morts et leurs noms
} else {
  console.log(
    `Les survivants ont réussi à tuer Jason mais cela a couté la vie a ${d} d'entre eux. Les survivants morts sont ${surMorts} `
  );
}
