//цепочка вызовов - chaining

const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter((num) => num > 2);

// console.log(greaterThenTwo);

// const multByTwo = greaterThenTwo.map((num) => num * 3);

// console.log(multByTwo);

// const sorted = multByTwo.sort((a, b) => a - b);
// console.log(sorted);

const res = numbers
  .filter((num) => num > 2)
  .map((num) => num * 3)
  .sort((a, b) => a - b);

console.log(res);
