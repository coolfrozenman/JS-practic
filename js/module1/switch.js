// ТЕРНАРНЫЕ ОПЕРАТОРЫ ПРИ ПРОСТЫХ ВЫРАЖЕНИЯ ИЗ ДВУХ ЗНАЧЕНИЙ

// const age = 20;
// const category = age >= 18 ? "abult" : "child";
// console.log(category);

// const star = 1;

// if (star === 1) {
//   console.log("1");
// } else if (star === 2) {
//   console.log("2");
// } else if (star === 3) {
//   console.log("3");
// } else if (star === 4) {
//   console.log("4");
// } else if (star === 5) {
//   console.log("5");
// } else {
//   console.log("неверный ввод");
// }

// УПРОЩЁННЫЙ АНАЛОГ ПРЕДЫДУЩЕГО СКРИПТА "SWITCH"

// const stars = 1;
// let result;

// switch (stars) {
//   case 1:
//     result = " case 1";
//     break;

//   case 2:
//     result = " case 2";
//     break;

//   case 3:
//     result = " case 3";
//     break;

//   case 4:
//     result = " case 4";
//     break;

//   case 5:
//     result = " case 5";
//     break;

//   default:
//     result = "неверный ввод";
// }
// console.log(result);

// ПРИ ОДИНАКОВІХ РЕЗУЛЬТАТАХ

const stars = 1;
let price = 0;
switch (stars) {
  case 1:
    price = 20;
    break;

  case 2:
  case 4:
  case 3:
    price = 50;
    break;

  case 5:
    price = 100;
    break;
  default:
    console.log("такого количества звёзд нет");
}
console.log(price);
