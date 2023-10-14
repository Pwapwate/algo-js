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

class Tueur {
  constructor(prenom, vie) {
    this.prenom = prenom;
    this.vie = vie;
  }
}
function getRand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function getAction(survivant) {
  const test = Math.random() * 100;
  const val1 = survivant.prbDegats * 100;
  const val2 = val1 + survivant.prbMourir * 100;
  const val3 = val2 + survivant.prbMourirDegats * 100;

  if (test >= val1) {
    if (test >= val2) {
      // Défense et mourir
      return 1;
    } else {
      // Esquive et dégâts
      return 2;
    }
  } else {
    // Mourir
    return 3;
  }
}

const noms = ["Jean", "Paul", "Louis", "Flore", "Anaïs"];
const caracteristiques = ["sportif", "drole", "chatoyant", "gentil", "geek"];
const proba = [
  [0.3, 0.1, 0.6],
  [0.4, 0.5, 0.1],
  [0.5, 0.1, 0.4],
  [0.2, 0.6, 0.2],
  [0.3, 0.3, 0.4],
];

const survivants = [];
let a = 0;
let b = 5;
for (let a = 0; a <= 5; a++) {
  const indexNom = getRand(0, b);
  const indexCara = getRand(0, b);
  b -= 1;
  console.log(indexCara);
  const prenom = noms.splice(indexNom, 1)[0];
  const cara = caracteristiques.splice(indexCara, 1)[0];
  const [prbMourir, prbDegats, prbMourirDegats] = proba.splice(indexCara, 1)[0];

  const survivant = new Survivant(
    prenom,
    cara,
    prbMourir,
    prbDegats,
    prbMourirDegats,
    "vivant"
  );
  survivants.push(survivant);
}
let d = 0;
const jason = new Tueur("Jason", 100);
while (jason.vie > 0 && survivants.length > 0) {
  for (const survivant of survivants) {
    if (survivant.etat === "vivant") {
      const action = getAction(survivant);
      if (action === 1) {
        jason.vie -= 10;
        console.log(
          `${survivant.prenom} a infligé 10pts de dégâts à Jason avant de mourir.`
        );
        survivant.etat = "mort";
        delete survivant;
        d += 1;
      } else if (action === 2) {
        jason.vie -= 15;
        console.log(
          `${survivant.prenom} a esquivé l'attaque de Jason et lui a infligé 15pts de dégâts.`
        );
      } else {
        console.log(
          `${survivant.prenom} n'a pas réussi à se défendre et est mort sous les coups de ${jason.prenom}`
        );
        survivant.etat = "mort";
        delete survivant;
        d += 1;
      }
    }
  }
  if (jason.vie <= 0) {
    break;
  }
}

if (d=5){
  console.log('ils sont morts')
} 


