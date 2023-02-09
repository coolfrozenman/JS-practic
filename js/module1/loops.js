// console.log(`before`);

// for (let count = 0; count <= 10; count += 2) {
//   console.log(`Count ${count}`);
// }

// console.log(`after`);

// цикл FOR

// let userInput = prompt("введите число");
// userInput = Number(userInput);
// let total = 0;

// for (let i = 1; i <= userInput; i += 1) {
//   total += i;
// }
// console.log(`Total = ${total}`);

// цикл WHILE

// const number = 4;
// let total = 0;
// let i = 1;
// while (i <= number) {
//   total += i;
//   i += 1;
// }
// console.log(`Total = ${total}`);

// ВЫПОЛНИТЬ ХОТЯБЫ ОДИН РАЗ

let userInput;
do {
  userInput = prompt("введи 5");

  if (userInput === null) {
    console.log("вышли нах");
    break;
  }

  userInput = Number(userInput);
} while (userInput !== 5);

// ВЫБРАТЬ ЧЁТНЫЕ ЦИФРЫ

// for (let i = 0; i < 10; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
