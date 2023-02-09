//  ПСЕВДОМАССИВ arguments и Array.from  и ...

// const fn = function () {
//   console.log([]);
//   console.log(arguments);
// };

// fn(1, 2, 3, 4, 5);

//ФУНКЦИЯ СЛОЖЕНИЯ ПРОИЗВОЛЬНОГО КОЛИЧЕСТВА ЭЛЕМЕНТОВ

// const add = function () {
//   const args = Array.from(arguments); //ФУНКЦИЯ Array.from() СДЕЛАЙ МАССИВ ИЗ И ПЕРЕДАЁМ В СКОБОЧКИ arguments
//   console.log(arguments);
//   console.log(args);

//arguments МОЖНО ПЕРЕБРАТЬ В for
// for (let i = 0; i < arguments.length; i += 1) {
//   console.log(arguments[i]);
// }
// };

// console.log(add(1, 2, 3, 4));

// console.log(add(1, 2, 3, 4, 5, 6));

//БОЛЕЕ СОВРЕМЕННЫЙ МЕТОД (...имя переменной) ну и проще

// const add = function (...args) {
//   console.log(args);
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// };
// console.log(add(1, 2, 3));

// console.log(add(1, 2, 3, 6, 7));

//ФУНКЦИЯ ПРИКРЕПЛЕНИЯ ТЭГА К ПОСТУ

// const posts = ["post1", "post2", "post3", "post4"];
// const tag = "#JSnice";

// const postsWistTag = [];

// for (const post of posts) {
//   postsWistTag.push(`${post}${tag}`);
// }
// console.log(postsWistTag);

const addTag = function (tag, ...args) {
  const postsWistTag = [];
  for (const arg of args) {
    postsWistTag.push(`${arg}${tag}`);
  }
  return postsWistTag;
};

console.log(addTag("#JSnice", "post1", "post2", "post3"));
console.log(addTag("#JSfuck", "post1", "post2", "post3"));
console.log(addTag("#JSnormal", "post1", "post2", "post3"));
