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

  attackPokemon(Pokemon) {
    if (this.isLucky()) {
      let damages = this.attack - Pokemon.defense;
      Pokemon.hp -= damages;
      console.log(`${this.name} a attaqué ${pokemon.name}, perdant ${damages} hp !`)
    } else {
      console.log(`${this.name} a raté son attaque`);
    }
  }
}
let Rattataque = new Pokemon("Rattataque", 8, 3, 10, 80);
let Poichigeon = new Pokemon("Poichigeon", 9, 15, 20, 25);

Poichigeon.attackPokemon(Rattataque)
