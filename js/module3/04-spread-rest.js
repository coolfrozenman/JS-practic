const temperatures = [18, 14, 12, 21, 17, 29];

// console.log(Math.min(...[18, 14, 12, 21, 17, 29])); три точки перед массивом, обозначают операцию "spread"(распыления),чтоб
//конструктор Math.min мог определить тип

// const nextTemp = temperatures.concat([1, 2, 3]);

const nextTemp = [...temperatures, 1, 2, 3]; //делает тоже самое что и "concat" только в более современном синтаксисе

// console.log(nextTemp);

const lastWeekTemps = [1, 4, 6, 8];
const currenttemps = [53, 43, 12];
const nextWeekTemps = [45, 78, 22];

// const temps = lastWeekTemps.concat(currenttemps, nextWeekTemps); //или

const temps = [
  ...lastWeekTemps,
  "dima",
  ...currenttemps,
  "morozov",
  ...nextWeekTemps,
];
// console.log(temps);

//РАСПЫЛЕНИЕ ОБЪЕКТОВ

const a = { x: 1, y: 2 };
const b = { x: 0, z: 4 };

// const c = Object.assign({}, a, b); //так работает метод "Object.assing"
const c = { ...a, ...b }; //а так работает новый синтаксис распыления

// console.log(c);

//ОПЕРАЦИЯ "rest"(сбор)

const fn = function (...args) {}; ///ОПЕРЦИЯ "rest" СОБИРАЕТ ЭЛЕМЕНТЫ В ОДИН МАССИВ
fn(1, 2, 3, 4, 5);
