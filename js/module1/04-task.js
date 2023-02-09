// const credit = 9000;
// const pricePreDroid = 3000;
// let message;
// const userInput = prompt("Введите нужное количесвто дроидов");
// if (userInput === null) {
//   message = "Отменено пользователем!";
//   console.log(message);
// } else if (credit < pricePreDroid) {
//   let totalPrice;
//   totalPrice = pricePreDroid * userInput;
//   console.log(`сумма заказа ${totalPrice} кредитов`);
//   message = "Недостаточно средств на счету!";
//   console.log(message);
// } else if (credit >= pricePreDroid) {
//   let totalPrice;
//   totalPrice = pricePreDroid * userInput;
//   console.log(`сумма заказа ${totalPrice} кредитов`);
//   if (totalPrice > credit) {
//     message = "Недостаточно средств на счету!";
//     console.log(message);
//   } else if (totalPrice <= credit) {
//     let result;
//     result = credit - totalPrice;
//     console.log(
//       `Вы купили ${userInput} дроидов, на счету осталось ${result} кредитов.`
//     );
//   }
// }

const credits = 23580;
const pricePreDroid = 3000;
const userInput = prompt("введите количество дроидов");
let totalPrice = pricePreDroid * userInput;

if (userInput === null) {
  console.log("отменено пользователем");
} else if (credits < totalPrice) {
  const LackOfLoans = totalPrice - credits;
  console.log(
    `Недостаточно средств на счету, сумма вашего заказа составляет ${totalPrice} кредитов, вам нехватает ${LackOfLoans} кредитов`
  );
} else if (credits >= totalPrice) {
  let orderPrice = credits - totalPrice;
  console.log(
    `Вы купили ${userInput} дроидов, сумма заказа ${totalPrice} на счету осталось ${orderPrice} кредитов`
  );
} else {
  console.log(`неверный ввод`);
}
