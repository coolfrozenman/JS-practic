const firstName = "Morozov";
const lastName = "Dmytro";
const room = "716";
const type = "VIP";

// const fullName = firstName + " " + lastName;

// OLD SCHOOL ГАДОСТЬ
// const message =
//   "Гость" +
//   " " +
//   fullName +
//   " " +
//   "поселяется" +
//   " " +
//   "в" +
//   " " +
//   room +
//   " " +
//   type;
// console.log(message);

// ВОТ КАК НУЖНО
// const message = `Гость ${firstName} ${lastName} поселяется в ${room} номер ${type}`;

// console.log(message);
// console.log(message.length);
// МЕТОДЫ СТРОК
const superValue = "qwerty";
const userInput = prompt("введи нужное");
console.log("userInput before: ", userInput);

const normolaizedInput = userInput.toLowerCase();
console.log("userInput after:", userInput);
console.log("normalaizedInput:", normolaizedInput);
console.log(superValue === normolaizedInput);
