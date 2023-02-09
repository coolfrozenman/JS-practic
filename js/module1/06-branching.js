// ОПЕРАТОРЫ ВЕТВЛЕНИЯ

// let balanse = 20;
// const payment = 2000;

// console.log(
//   `общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`
// );

// if (balanse >= payment) {
//   // balanse -= payment;
//   balanse = balanse - payment;
//   console.log("всё хорошо! Снимаем деньги, спасибо за покупку!");
//   console.log(`на стету осталось ${balanse} кредитов`);
// } else {
//   console.log("на счету недостаточно средств для проведения операции");
// }

// const totalExpenses = 30000;
// const payment = 500;
// let discount = 0;
// if (totalExpenses >= 100 && totalExpenses < 1000) {
//   discount = 0.02;
//   console.log("бронзовый партнёр. скидка 2%");
// } else if (totalExpenses >= 1000 && totalExpenses < 5000) {
//   discount = 0.05;
//   console.log("серебрянный партнёр. скидка 5%");
// } else if (totalExpenses >= 5000) {
//   discount = 0.1;
//   console.log("золотой партнёр. скидка 10%");
// } else {
//   console.log("у вас ещё нет партнёрской скидки");
// }
// const finalAmount = payment - payment * discount;
// console.log(
//   `Оформляем заказ на сумму ${finalAmount} со скидкой ${discount * 100}%`
// );

// let balance = 100;
// const paymant = 2000;

// console.log(
//   `Общая стоимость заказа ${paymant} кредитов. Проверяем количество доступных стредств на счету`
// );

// if (balance >= paymant) {
//   //balance -= paymant;
//   balance = balance - paymant;
//   console.log(`Заказ выполне, ваш остаток на счету: ${balance}`);
// } else {
//   console.log(`недостаточно средств на счету`);
// }

const totalExpenses = 2000;
const paymant = 300;
let discount = 0;

if (totalExpenses >= 100 && totalExpenses < 1000) {
  discount = 0.02;
  console.log(`ваша скидка 2%`);
} else if (totalExpenses >= 1000 && totalExpenses < 5000) {
  discount = 0.05;
  console.log(`ваша скидка 5%`);
} else if (totalExpenses >= 5000) {
  discount = 0.1;
  console.log(`ваша скидка 10%`);
} else {
  console.log(`у вас нету ещё скидки`);
}

const finalAmount = paymant - paymant * discount;
console.log(`стоимость заказа с учётом скидки ${finalAmount}`);
