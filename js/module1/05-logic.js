// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

// const number = 99;

// логическое И

// const isInRange = number > 10 && number < 30;
// console.log(`число ${number} попадает в отрезок от 10 до 30:`, isInRange);

// логическое ИЛИ

// const isInRange = number < 10 || number > 30 || number === 99;
// console.log(
//   `число ${number} будет меньше 10 или больше 30 или это число 99:`,
//   isInRange
// );

//ПРИМЕР ОТКРЫТЬ ЧАТ С ДРУГОМ

const myFriend = true;
const friendOn = true;
const isDnd = false;

const openChat = myFriend && friendOn && !isDnd;
console.log(`вы вошли в чат:`, openChat);

//провернка подписки пользователля

const subscription = "free";

const canAccessContent = subscription === "vip" || subscription === "pro";
console.log(canAccessContent);
