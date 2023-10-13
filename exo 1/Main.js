// Definition de la classe
class conducteur {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
}

class trajet {
  constructor(feu, radio, changement) {
    this.feu = feu;
    this.radio = radio;
    this.changement = changement;
  }
}
// Definition des variables
var playlist = ["Pop", "Rap", "Rock", "Classique", "Anissa"];
let Charles = new conducteur("Charles", 10);
let Parcours = new trajet(30, 'radio', 0)
let musique = "";
let etat = 0;




console.log(radio)
// Boucle
for (Parcours.feu = 30; Parcours.feu >= 0; Parcours.feu--) {
  radio = playlist[Math.floor(Math.random() * playlist.length)]

  if (Parcours.feu == 0) {
    console.log(
      `C'est le dernier feu pour que Charles arrive chez lui et la musique jouée est ${Parcours.radio} `
    );
  } else {
    console.log(
      `Il reste ${Parcours.feu} feu avant que Charles arrive chez lui et la musique jouée est ${Parcours.radio} `
    );
  }

  if (musique == "Anissa") {
    if (Charles.health <= 0) {
      etat = 1;
      break;
    } else {
      Charles.health -= 1;
      console.log("Charles est donc obligé de changer de Taxi");
      Parcours.changement += 1;
    }
  }
}

//Message de fin
console.log("//////////////////////////////////////////");
if (etat == 1) {
  console.log(`Explosion de Charles`);
} else {
  console.log(
    `Charles est donc bien arrivé apres ${Parcours.changement} taxi(s) différent(s)`
  );
}
