// Definition de la classe conducteur pour le personnage
class conducteur {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
}
// Definition de la classe conducteur pour le trajet a effectuer
class trajet {
  constructor(feu, radio, changement) {
    this.feu = feu;
    this.radio = radio;
    this.changement = changement;
  }
}
// Definition des objets
let Charles = new conducteur("Charles", 10);
let Parcours = new trajet(30, "radio", 0);
// Definition des variables
let musique = "";
let etat = 0;
// Definition des musiques de la radio
var playlist = ["Pop", "Rap", "Rock", "Classique", "Anissa"];

// Boucle
// Definition de condition de boucle et changement du nombre de feu restant
for (Parcours.feu; Parcours.feu >= 0; Parcours.feu--) {
  // Musique de la radio aléatoire depuis playlist
  Parcours.radio = playlist[Math.floor(Math.random() * playlist.length)];
  // Renvoie dans la console pour dire que c'est le dernier feu au lieu de 'il reste 0 feu'
  if (Parcours.feu == 0) {
    console.log(
      `C'est le dernier feu pour que Charles arrive chez lui et la musique jouée est ${Parcours.radio} `
    );
    // Renvoie dans la console pour le nombre de feu restant et la musique en cours
  } else {
    console.log(
      `Il reste ${Parcours.feu} feu avant que Charles arrive chez lui et la musique jouée est ${Parcours.radio} `
    );
  }
  // Dans le cas ou la musique est Anissa :
  // Verification
  if (Parcours.radio == "Anissa") {
    // -1 de santé mentale
    Charles.health -= 1;
    // +1 Changement
    Parcours.changement += 1;
    // Verification que charles est encore en vie, si oui, la boucle se casse
    if (Charles.health <= 0) {
      etat = 1;
      break;
    }
    // S'il n'explose pas il peut donc changer de taxi
    console.log("Charles est donc obligé de changer de Taxi");
  }
}

//Message de fin pour bien separer le trajet de la conclusion
console.log("//////////////////////////////////////////");
// Verification de l'etat, vivant ou explosé
if (etat == 1) {
  // Si health <= 0, explosion
  console.log(`Explosion de Charles`);
} else {
  // Si health >= 0, Charles est bien arrivé
  console.log(
    `Charles est donc bien arrivé apres ${Parcours.changement} taxi(s) différent(s)`
  );
}
