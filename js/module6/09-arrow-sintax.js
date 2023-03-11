// const add = function (a, b) {
//   return a + b;
// };

// Синтаксис стрелочной функции
//- с параметрами

//- без параметров

// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(2, 3));

//- с одним параметром

const logMassage = (message) => {
  console.log(message);
};
logMassage("привет");

//если параметров нет

const greet = () => {
  console.log("привет");
};
greet();
//Явеый(explicit) и неявный(implicit) возврат

// const add = (a, b) => a + b; //это синтакчис неявного возврата
// console.log(add(2, 3));

//Псевдомассив arguments

const add = (...args) => {
  console.log(args);
};
add(2, 3, 4, 5, 6, 7);
