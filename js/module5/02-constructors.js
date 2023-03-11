//ОСНОВЫ ооп: класс, объект, интерфейс

//_________________________________

//ФУНКЦИИ-КОНСТРУКТОРЫ
//СВОЙСТВО Function.prototype

// const Manager = function (name, sales) {
//   //ПИШУТ НАЗАВАНИЕ ПЕРЕМЕННОЙ С БОЛЬШОЙ БУКВЫ ЧТОБЫ БІЛО ПОНЯТНО ЧТО ЭТО ФУНКЦИЯ КОНСТРУКТОР
//   this.name = name;
//   this.sales = sales;
// };
// const mango = new Manager("mango", 2);
// Manager.prototype.sell = function () {
//   this.sales += 1;
// };

// Manager.prototype.offSell = function () {
//   this.sales -= 1;
// };

// Manager.prototype.changeName = function (name) {
//   this.name = name;
// };
// mango.sell();

// console.log(mango);

// const poly = new Manager("poly", 3);

// poly.offSell();

// poly.changeName("Shlyapa");
// console.log(poly);

// console.log(mango.__proto__ === Manager.prototype); //true: это один ит тот же объект, связанный ссылкой

//ВАЖНО!!!!!!!!!!!!!!!!!!!
//---свойсвто объекта:"__proto__"

//свойство функции:"prototype"

//--------------------------------------------------------------------------------

//СОЗДАЁм героя игры
//и смотим на статические свойства и методы

const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};
Hero.discription = "This is a Hero base class"; //это статический метод

Hero.prototype.changeName = function (name) {
  this.name = name;
};

Hero.showStats = function (hero) {
  console.log("Login stats from Hero.sowStats", hero);
}; //это статическая функция

const mango = new Hero("mango", 1000);

console.log(mango);

Hero.showStats(mango); //вызов статической функции
Object.defineProperty(); //поюзать
