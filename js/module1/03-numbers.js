// const value = "111";

// const number = Number(value);

// console.log(number);

// const blockWidth = "300px";
// const width = Number.parseInt(blockWidth);//приобразует число с без точек и других символов
// const blockHeight = "300.5px";
// const width = Number.parseFloat(blockHeight);//приобразует число с первый точкой

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

// const numberInputRef = document.querySelector("input.number");
// const powerInputRef = document.querySelector("input.power");
// const buttonRef = document.querySelector("button");

// buttonRef.addEventListener("click", function () {
//   console.log("numberInputRef.value: ", numberInputRef.value);
//   console.log("powerInputRef.value: ", powerInputRef.value);

//   const number = Number(numberInputRef.value);
//   const power = Number(powerInputRef.value);

//   const result = Math.pow(number, power);
//   console.log(result);
// });
