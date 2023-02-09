const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const userInput = prompt("ваш пароль");
if (ADMIN_PASSWORD === userInput) {
  message = "Добро пожаловать!";
  console.log(message);
  alert(message);
} else if (userInput === null) {
  message = "Отменено пользователем!";
  console.log(message);
  alert(message);
} else {
  message = "Доступ запрещен, неверный пароль!";
  console.log(message);
  alert(message);
}

// const ADMIN_PASSWORD = "jqueryismyjam";
// let message;
// const userInput = prompt(`введите пароль`);

// if (ADMIN_PASSWORD === userInput) {
//   message = "Добро пожаловать!";
//   console.log(message);
//   alert(message);
// } else if (ADMIN_PASSWORD !== userInput && userInput !== null) {
//   message = "Доступ запрещен, неверный пароль!";
//   console.log(message);
//   alert(message);
// } else {
//   message = "Отменено пользователем!";
//   console.log(message);
//   alert(message);
// }
