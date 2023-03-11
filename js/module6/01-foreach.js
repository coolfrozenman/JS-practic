// Array.prototype.forEach();
//поэлементто перебирает массив
//ничего не возвращает
//заменет классический for, если не нужно прерывать цикл

const numbers = [5, 10, 15, 20, 25];

numbers.forEach(function (element, index, array) {
  console.log(element);
  console.log(index);
  console.log(array);
});
