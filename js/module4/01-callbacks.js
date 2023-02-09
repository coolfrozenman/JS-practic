//ФУНКЦИЯ ОБРАТНОГО ВЫЗОВА (callback) и функция высшего порядка (hof)

// const greet = function (name) {
//   console.log(`hello ${name}`);
// };

// const greetWithName = function (callback) {
//   const name = "Mango";
//   console.log(callback);
//   callback(name);
// };

// greetWithName(greet);

//ОТЛОЖЕННІЙ ВЫЗОВ: РЕГИСТРАЦИЯ СОБЫТИЙ
// const buttonRef = document.querySelector("button");

// const handleButtonClick = function () {
//   console.log("click");
// };

// buttonRef.addEventListener("click", handleButtonClick);

//ОТЛОЖЕННЫЙ ВЫЗОВ: ИНТЕРВАЛЫ

// setTimeout(function () {
//   console.log("3000!");
// }, 3000);

//ОТЛОЖЕННЫЙ ВЫЗОВ: HTTP-ЗАПРОС

const handleFetchSuccess = function (data) {
  console.log(data);
};

console.log(`перед fetch`);
fetch("https://swapi.dev/api/people/1")
  .then((res) => res.json())
  .then(handleFetchSuccess);

console.log(`после fetch`);
