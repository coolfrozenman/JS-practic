//Array.prototopy.find()
//поэлементно перебирает оригинальный массив
//возвращает первый элемент удовлитворяющий условие или undefined

const numbers = [5, 10, 15, 20, 25];

const number = numbers.find(function (n) {
  return n === 15;
});
console.log(number);

const players = [
  {
    id: "players-1",
    name: "mango",
    timePlayed: 310,
    points: 54,
    online: false,
  },
  { id: "players-2", name: "poly", timePlayed: 470, points: 98, online: true },
  { id: "players-3", name: "kiwi", timePlayed: 230, points: 48, online: true },
  { id: "players-4", name: "ajax", timePlayed: 150, points: 71, online: false },
  { id: "players-5", name: "chelsy", timePlayed: 80, points: 48, online: true },
];

const playerToIdFind = "players-4";

const player = players.find(function (player) {
  return playerToIdFind === player.id;
});

console.log(player);
