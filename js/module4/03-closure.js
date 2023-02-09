//  ЗАМЫКАНИЕ
// const foo = function () {
//   const s = 5;
//   return function () {
//     console.log(s);
//   };
// };

// const outerfn = foo();
// console.log(outerfn);

// outerfn();

//СОЗДАЕМ ПОВАРА С ИМЕНЕМ И БЕЗ первый вариант без замыкание

// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} готовит ${dish}`);
// };

// makeDish("Mango", "пирожёк");
// makeDish("Mango", "омлет");
// makeDish("Mango", "чай");

// makeDish("Poly", "катлеты");
// makeDish("Poly", "супик");
// makeDish("Poly", "кофе");

//второй вариант с замыканием

const makeSheff = function (name) {
  return function (dish) {
    console.log(`${name} готовит ${dish}`);
  };
};

const mango = makeSheff("Mango");
const poly = makeSheff("Poly");

mango("пирожёк");
poly("чай");

console.dir(mango); //проверить closure(замыкание)

//ГЛУБОКОЕ ЗАМЫКАНИЕ

const FnA = function (a) {
  return function FnB(b) {
    return function FnC(c) {
      console.log(a, b, c);
    };
  };
};

const res = FnA(5)(10); //вторые скобочки это споспбо достучаться до функции которая вложена дальше, так же можно делать и третии, четвёртые скобки
res(15);

console.dir(res);
