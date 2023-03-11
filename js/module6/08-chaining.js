//цепочка вызовов - chaining

const numbers = [1, 5, 2, 4, 3];

const res = numbers
  .filter(function (num) {
    return num > 2;
  })
  .map(function (num) {
    return num * 3;
  })
  .sort(function (prevNum, nextNum) {
    return nextNum - prevNum;
  });
// console.log(res);

// сортируем теч кто онлайн по рангу

const players = [
  {
    id: "id-1",
    name: "mango",
    rank: 300,
    isOnline: false,
  },
  { id: "id-2", name: "poly", rank: 800, isOnline: true },
  { id: "id-3", name: "kiwi", rank: 600, isOnline: true },
  { id: "id-4", name: "ajax", rank: 100, isOnline: false },
  { id: "id-5", name: "chelsy", rank: 400, isOnline: true },
];

const onlineAndSorted = players
  .filter(function (player) {
    return player.isOnline;
  })
  .sort(function (prevPlayer, nextPlayer) {
    return prevPlayer.rank - nextPlayer.rank;
  });
console.table(onlineAndSorted);

//Chaining в методах объекта как jquery
