// const value = "111";

// const number = Number(value);

// console.log(number);

// const blockWidth = "300px";
// const width = Number.parseInt(blockWidth);

// console.log(width);

// const blockHeight = "124.4px";
// const heigth = Number.parseFloat(blockHeight);

// console.log(heigth);

let number = prompt("введите число");
number = Number(number);

let power = prompt("введите степень");
power = Number(power);

console.log(number);
console.log(power);

const result = Math.pow(number, power);
console.log(result);
