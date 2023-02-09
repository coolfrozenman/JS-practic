//ПРОТОТИП ОБЪЕКТА
// Object.create();
// [[Prototype]]; и __proto__
//ЦЕПОЧКА ПРОТОТИПОВ
const objB = {
  x: 1,
  y: 2,
};

const objA = Object.create(objB);

objA.z = 20;
objA.v = 43;
console.log(objA);

//ПРАВИЛА СВОЙСТВА ПОИСКА В ЦЕПОЧКЕ ПРОТОТИПА
console.log(objB.x);
