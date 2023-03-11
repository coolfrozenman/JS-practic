class Hero {
  constructor(name, xp) {
    this._name = name;
    this.xp = xp;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  gainXP(amount) {
    console.log(`${this.name} получил ${amount} опыта`);
    this.xp += amount;
  }
}

class Warrrior extends Hero {
  constructor(name, xp, weapon) {
    super(name, xp);
    this.weapon = weapon; //так работает наследования от другого класа с помощью "extends" и "super"
  }

  attack() {
    console.log(`${this.name} атакует используя ${this.weapon}`);
  }
}
// const mango = new Warrrior("mango", 1000, "Алибарда");

// const mango = new Hero("mango", 1000);

// mango.attack();

console.log(Warrrior.prototype.__proto__ === Hero.prototype); //true

class Paladin extends Warrrior {
  constructor(name, xp, weapon, spell) {
    super(name, xp, weapon);
    this.spell = spell;
  }
  cast() {
    console.log(`${this.name} кастует ${this.spell}`);
  }
}

const mango = new Paladin("mango", 1000, "Алибарда", "heal");
console.log(mango);

mango.gainXP(1500);
mango.attack();
console.log(mango.name);
mango.cast();
