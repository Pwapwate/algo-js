// Correction de l'exo 9

class Pokemon {
  constructor(name, attack, defense, hp, luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.luck = luck;
  }

  isLucky() {
    return Math.floor(Math.random() * 100) <= this.luck;
  }

  attackPokemon(pokemon) {
    if (this.isLucky()) {
      let damages = this.attack - pokemon.defense;
      pokemon.hp -= damages;
      console.log(
        `${this.name} a attaqué ${pokemon.name}, perdant ${damages} hp ! ${pokemon.name} a désormais ${pokemon.hp}!`
      );
    } else {
      console.log(`${this.name} a raté son attaque !`);
    }
  }
}

// FIN DE LA CLASSE POKEMON
// Instanciation des pokemons 
let moustillon = new Pokemon("Moustillon", 10, 5, 30, 75);
let rondoudou = new Pokemon("Rondoudou", 15, 3, 30, 50);

// Boucle d'attaque et de victoires

while (moustillon.hp > 0 && rondoudou.hp > 0) {
  moustillon.attackPokemon(rondoudou);
  if (rondoudou.hp <= 0) {
    console.log(`Rondoudou a perdu le combat, il est K.O.`);
    break;
  }
  rondoudou.attackPokemon(moustillon);
  if (moustillon.hp <= 0) {
    console.log(`Moustillon a perdu le combat, il est K.O.`);
    break;
  }
}
console.log("Le combat est terminé");
