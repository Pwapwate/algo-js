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
        `${this.name} a attaqué ${pokemon.name}, perdant ${damages} hp ! Il a desormais ${pokemon.hp}!`
      );
    } else {
      console.log(`${this.name} a raté son attaque !`);
    }
  }
}

// FIN DE LA CLASSE POKEMON

let moustillon = new Pokemon("Moustillon", 10, 5, 30, 75);
let rondoudou = new Pokemon("Rondoudou", 15, 3, 30, 50);

//moustillon.attackPokemon(rondoudou);

while (moustillon.hp >0 && rondoudou.hp >0) {
  moustillon.attackPokemon(rondoudou);
  rondoudou.attackPokemon(moustillon);
}

// Winner 
let winner =''
let looser =''
if (moustillon.hp < 0) {
  winner = 'Moustillon'
  looser = 'Rondoudou'
  hp_winner = rondoudou.hp
} else {
  winner = 'Rondoudou'
  looser = 'Moustillon'
  hp_winner = moustillon.hp

}

// Resultat 
console.log(`${looser} est mort, ${winner} l'a battu!`)


