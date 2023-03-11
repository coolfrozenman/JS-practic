//Array.ptototype.reduce()
//полэлемнтно пербирает оригинальный массив
//возвращает что угодно !!!(ВНИМАТЕЛЬНО)
//Заменяет всё на свете, но использовать нужно с умом

// const numbers = [5, 10, 15, 20, 25];
//accumulator это значение которое мы собираем
// const total = numbers.reduce(function (accumulator, number, index, array) {
//   console.log("accumulator:", accumulator);

//   return accumulator + number;
// }, 0);

// console.log(total);

//ПРИМЕР
//считаем общее количесвто значений свойтв объекта
// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce(function (acc, value) {
//   return acc + value;
// }, 0);

//считаем общее колтчество часов

// console.log(totalSalary);
// const players = [
//   {
//     id: "players-1",
//     name: "mango",
//     timePlayed: 310,
//     points: 54,
//     online: false,
//   },
//   { id: "players-2", name: "poly", timePlayed: 470, points: 98, online: true },
//   { id: "players-3", name: "kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "players-4", name: "ajax", timePlayed: 150, points: 71, online: false },
//   { id: "players-5", name: "chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const totalTimePlayed = players.reduce(function (time, player) {
//   return time + player.timePlayed;
// }, 0);
// console.log(totalTimePlayed);

//считаем общуюю сумму товаров корзины

// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce(function (total, item) {
//   return total + item.price * item.quantity;
// }, 0);
// console.log(totalAmount);

//собираем все тэги из твитов

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce(function (tags, tweet) {
  tags.push(...tweet.tags);
  return tags;
}, []);

console.log(allTags);

//ведём статистику тэгов
//это грязная версия, мутирует аргумент в который прийдёт в acc

const tagsStats = allTags.reduce(function (acc, tag) {
  console.log("TAG", tag);
  console.log("ACC", acc);

  if (acc.hasOwnProperty(tag)) {
    console.log("такое свойство есть, добавляем значение");
    acc[tag] += 1;
    return acc;
  }
  console.log("такого свейста нет, добавляем на объект");
  acc[tag] = 1;

  acc[tag] = acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1; //тоже самое что и више только упрощённая запись

  return acc;
}, {});

//чистая функция, каждый раз создает новый объёкт

// const tagsStats = allTags.reduce(function (acc, tag) {
//   return {
//     ...acc,
//     [tag]: acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1,
//   };
// }, {});

console.log(tagsStats);

// //reduce соими руками

// Array.prototype.reduce = function (callback, initialValue = this[0]) {
//   let accumulator = initialValue;

//   for (let i = 0; i < this.length; i += 1) {
//     accumulator = callback(accumulator, this[i], i, this);
//   }
//   return accumulator;
// };
