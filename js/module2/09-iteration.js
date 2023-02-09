// ФУНКЦИИ ДЛЯ ПЕРЕБОРА МАССИВА

// const friends = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// const numbers = [1, 2, 3, 4, 5, 6];

// const logItem = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };

// logItem(friends);
// logItem(numbers);

// НАЙТИ ДРУГА

const friends = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

const findFriends = function (allFriends, name) {
  for (const friend of allFriends) {
    if (friend === name) {
      return `нашли типа`;
    }
  }
  return `не нашли типа`;
};
const r1 = findFriends(friends, "Poly");
console.log(r1);

const r2 = findFriends(friends, "Dima");
console.log(r2);

const r3 = findFriends(friends, "Lux");
console.log(r3);

// альтернатива поиска друга icludes (true or false)

// const friends = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// const findFriens = function (allFriends, name) {

//   const isInFriends = allFriends.includes(name);

//   return isInFriends ? "нашли такого друга" : "нету такого друга";
// };
// const r1 = findFriens(friends, "Poly");
// console.log(r1);
// const r2 = findFriens(friends, "Dima");
// console.log(r2);
