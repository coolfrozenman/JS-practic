//СМОТРИИ НА КЛАССЫ. ПЕРЕПИСЫВАЕМ hero с новым синтаксисом

class Hero {
  static discription = "This is a Hero base class"; //это статический метод в классах

  static showStats = function (hero) {
    console.log("Login stats from Hero.sowStats:", hero);
  }; //это статическая функция в классах

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
  // changeName(name) {
  //   this.name = name;
  // }
  gainXP(amount) {
    console.log(`${this.name} получил ${amount} опыта`);
    this.xp += amount;
  }
}

const mango = new Hero("mango", 1000);

// console.log(mango);

// mango.gainXP(200);

// console.log(mango);

// Hero.showStats(mango); //вызов статической функции

console.log(mango.name); //вызов get

mango.name = "Shlyapa"; //set может менять значение

console.log(mango.name);
