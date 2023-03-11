//Array.prototype.map()
//ПОЭЛЕМЕНТНО ПЕРЕБИРАЕТ ОРИГИНАЛЬНЫЙ МАССИВ
//ВОЗВРАЩАЕТ НОВЫЙ МАССИВ ТАКОЙ-ЖЕ ДЛИННЫ

// const numbers = [5, 10, 15, 20, 25];

// const map = numbers.map(function (element, index, array) {
//   return element * 2;
// });

// console.log(map);

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
//получаем массив всех имен игроков
// const playersName = players.map(function (player) {
//   return player.name;
// });

// console.log(playersName);

// const playersPoints = players.map(function (player) {
//   return { ...player, points: player.points + player.points * 0.1 };
// });
// console.table(playersPoints);

//увеличиваем количесвто часов игрока по id;
// const playerIdToUpdate = "players-3";

// const updatePlayer = players.map(function (player) {
//   if (player.id === playerIdToUpdate) {
//     return { ...player, timePlayed: player.timePlayed + 333 };
//   }
//   return player;
// });

// console.table(updatePlayer);

//КАК пишеться "map" под капотом(своими руками)

const numbers = [5, 10, 15, 20, 25];

//-- создает и возврашает новый массив
//-- перебирает оригинальный массив
//-- вызывает кодбэк для каждого элемента и кидает туда оргументы
//-- записывает результат вызова функции в новый массив

const map = function (array, callback) {
  const newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    const result = callback(array[i], i, array);
    newArray.push(result);
  }

  return newArray;
};

const dabledNumbers = map(numbers, function (number, index, array) {
  console.log(number);
  console.log(index);
  console.log(array);

  return number * 2;
});
console.log(dabledNumbers);

//пишем руками Array.prototype.map

Array.prototype.map = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i += 1) {
    const result = callback(this[i], i, this);
    newArray.push(result);
  }

  return newArray;
};
const dabled = numbers.map(function (number) {
  return number * 2;
});
console.log(dabled);
