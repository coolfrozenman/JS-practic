const checkForSpam = function (message) {
  const words = message.toLowerCase();
  return words.includes("spam") || words.includes("sale");
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM]] How to earn fast money?")); // true

//НЕУДАЧНОЕ РЕШЕНИЕ

// const forbiddenWords = ["spam", "sale"];
// const checkForSpam = function (message) {
//   let normolaized = message.toLowerCase();
//   let words = normolaized.split(" ");

//   for (const word of words) {
//     for (const forbiddenWord of forbiddenWords)
//       if (word === forbiddenWord) {
//         return true;
//       }
//   }

//   return false;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
