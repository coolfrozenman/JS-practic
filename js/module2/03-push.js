//собираем ввод пользоваетлся и что-то с ним делаем

// просморт методов массивов

// console.log([]);

// const numbers = [1, 2, 3];

//МЕТОД ".push" ПРИНЕМАЕТ ЭЛЕМЕНТ В МАССИВ И ДОБАВЛЯЕТ ЕГО В КОНЕЦ МАССИВА

// numbers.push(99, 33, 56, 786);

// console.log(numbers);

//МЕТОД ".pop" УДАЛЯЕТ ПОСЛЕДНИЙ ЭЛЕМЕНТ МАССИВА

// numbers.pop();
// numbers.pop();

// console.log(numbers);

//МЕТОД ".unshift" добавляется элемент в начало массива(почти не юзается)

// numbers.unshift(77);

// console.log(numbers);

//МЕТОД ".shift" удаляет элемент с начала массива(почти не юзается)

// numbers.shift();
// numbers.shift();

// console.log(numbers);

//ПРИМЕРЫ В ИСПОЛЬЗОВАНИИ

const valueInputRef = document.querySelector(".js-value");
const addValueBtn = document.querySelector(".js-add-value");
const calcBtn = document.querySelector(".js-calculate");
const numbers = [];
let total = 0;

addValueBtn.addEventListener("click", function () {
  const value = Number(valueInputRef.value);

  numbers.push(value);
  valueInputRef.value = ""; //ЭТО ОБНОВЛЕНИЕ ВВОДА В СТРОКЕ ВВОДА

  console.log(numbers);
});

calcBtn.addEventListener("click", function () {
  for (const number of numbers) {
    console.log(number);
    total += number;
  }
  console.log(total);
});
