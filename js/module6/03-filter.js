//Array.prototype.filter()
//поэлементно перебирает массив
//возвращает новый массив
//добавляет в возвращённый массив элементы которые удовлитворяют условия

// const numbers = [5, 10, 15, 20, 25];

// const filterNumber = numbers.filter(function (number) {
//   return number > 15;
// });

// console.log(filterNumber);

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

// const onlinePlayers = players.filter(function (player) {
//   return player.online;
// });
// console.table(onlinePlayers);

//КАК пишеться "filter" под капотом(своими руками)

const filter = function (array, callback) {
  const newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    const passed = callback(array[i], i, array);
    if (passed) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

const numbers = [5, 10, 15, 20, 25];

const filteredNumbers = filter(numbers, function (number, index, array) {
  console.log(number);
  console.log(index);
  console.log(array);

  return number > 15;
});

console.log(filteredNumbers);
