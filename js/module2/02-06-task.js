const numbers = [];
let total = 0;
while (true) {
  let input = prompt("введи число");

  input = Number(input);

  numbers.push(input);
  console.log(numbers);

  if (input === 0) {
    for (const number of numbers) {
      total += number;
    }

    console.log(`Общая сумма чисел равна ${total}`);
    break;
  }

  const notANumber = Number.isNaN(input);
  if (notANumber) {
    numbers.pop(input);
    alert(`Было введено не число, попробуйте еще раз`);
    continue;
  }
}

// let input;
// for (let i = 0; (i = numbers.length); i + 1) {
//   input = prompt("введи число");
//   if (input !== null) {
//     numbers.push(input);
//   }
//   input = Number(input);
// }

// while (true) {
//   input = prompt("введи число");
//   input = Number(input);

//   for (number of numbers) {
//     numbers.push(numbers);
//     console.log(numbers);
//   }
// }
