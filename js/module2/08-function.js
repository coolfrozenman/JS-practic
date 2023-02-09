//ФУНКЦИИ (в скобочках параметры)
const add = function (a, b) {
  console.log(`a`, a);
  console.log(`b`, b);
  console.log(`hello`);

  const result = a + b;

  return result;
};
const r1 = add(2, 5); //вызов функции(в скобочках аргументы)
console.log(r1);

const r2 = add(23, 87);
console.log(r2);

const r3 = add(76, 88);
console.log(r3);

//ПРИМЕР РАБОТЫ ФУНКЦИИ В ФУНКЦИИ

const FnA = function () {
  console.log(`начало выполнается [FnA]`);
  FnB();
  console.log(`продолжение віполнения [FnA] после выхода [FnB]`);
};

const FnB = function () {
  console.log(`выполняется [FnB]`);
};
console.log(`начало выполнения [main]`);
FnA();
console.log(`продолжил выполнение [main] после выхода [FnA]`);

//ТРИ ВОПРОСА ЗАДАЙ СЕБЕ ПРИ РЕШЕНИИ ЗАДАЧ
// 1.ЧТО МНЕ НЕОБХОДИМО ЧТОБЫ ФУНКЦИЯ ПОЛУЧИЛА.
// 2.ЧТО ОНА ДОЛЖНА СДЕЛАТЬ.
// 3.ДОЛЖНА ЛИ ОНА ЧТО-ТО ВЕРНУТЬ."
