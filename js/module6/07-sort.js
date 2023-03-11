// Array.prototype.sort()
// Сортирует и ИЗМЕНЯЕТ оригинальный массив

const numbers = [1, 9, 6, 2, 3];
// numbers.sort(function (prev, next) {
//   return next - prev;
// }); //так можно сделать по убыванию
// console.log(numbers); //по дефолту сортирует по возрастанию

const letters = ["b", "B", "a", "A"];
// letters.sort();
// console.log(letters);

//как сделать копию массива чтобы не сортировать оригинальный

// const copy = numbers.slice().sort();

//или более современній способ
const copy = [...numbers].sort();

// console.log(copy);

//кастомная сложных типов

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
console.table(players);

const sorteredByTopPlayer = [...players].sort(function (
  prevPlayer,
  nextPlayer
) {
  //по возрастанию значения свойства
  //   return prevPlayer.timePlayed - nextPlayer.timePlayed;
  //по убыванию значения свойства
  return nextPlayer.timePlayed - prevPlayer.timePlayed;
});
console.table(sorteredByTopPlayer);
