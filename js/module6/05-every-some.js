//Array.prototype.every()
//поэлементно перебирает оригинальный массив
//возвращает true если все єлементы массива удовлетворяют условия

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

const isAllOnline = players.every(function (player) {
  return player.online;
});

console.log(isAllOnline); //false потому-что не все игроки онлайн, если будут все онлайн тогда будет true

const avaragedIdPlayTime = players.every(function (player) {
  return player.timePlayed > 70;
});

console.log("avaragedIdPlayTime:", avaragedIdPlayTime);

//Array.prototype.some()
//поэлементно перебирает оригинальный массив
//возвращает true если хотябы один элемент массива удовлетворяет условие

const isAnyOnline = players.some(function (player) {
  return player.online;
});
console.log(isAnyOnline); //true если хотябы один элемент будет подходить
