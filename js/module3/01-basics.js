//"ОБЪЕКТЫ" ОБЩИЕ ПОНЯТИЯ

// const hotel = { name: "Sunset result", stars: 5, capacity: 200 }; //литерал объекта
// console.log(hotel);

// console.log(hotel.stars); //так можно достутчаться

// console.log(hotel["name"]); //или так, если в имени свойства есть пробелы символы и т.д.

//ЕСЛИ НУЖНО ПЕРЕПИСАТЬ ЗНАЧЕНИЕ СВОЙСТВА ОБЪЕКТА(ПРИМЕР НИЖЕ)

// hotel.stars = 3;
// console.log(hotel.stars); //3

//ЕСЛИ НУЖНО ДОБАВИТЬ СВОЙТВО

// hotel.guests = 65;

// console.log(hotel);

//ОБЪЕКТ ЭТО ССЫЛОЧНЫЙ ТИПА ТАК-ЖЕ КАК И МАССИВ(сложный тип)

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a); //true

//МЕТОДЫ ОБЪЕКТА И this(Обращенние к свойствам объекта внутри функции, внутри объекта)

// const hotel = {
//   name: "Sunset result",
//   stars: 5,
//   capacity: 200,
//   updateName(newName) {
//     this.someMethod(); //В ОДНОМ ОБЪЕКТЕ МОЖНО ВЫЗЫВАТЬ ДРУГИЕ МЕТОДЫ ОБЪЕКТА
//     this.name = newName;
//   },
//   someMethod() {
//     console.log("hello from some method");
//   },
// };
// console.log(hotel);

// hotel.updateName("Montana");

// console.log(hotel);
// hotel.someMethod();

//ПЕРЕБОР СВОЙСТВ ОБЪЕКТА С ПОМОЩЬЮ "for...in"

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };
// let totalFeedback = 0;

// for (const key in feedback) {
//   console.log(key); //получить ключи свойств
//   console.log(feedback[key]); //получить значения свойств
//   totalFeedback += feedback[key];
// }

// console.log(totalFeedback); //общее колличесвто всех значений свойств
// console.log("good" in feedback);
// console.log(feedback);

// МЕТОД(конструктор) "Object.keys" получает из объекта массив ключей

// const keys = Object.keys(feedback); //

// console.log(keys);

// for (const key of keys) {
//   totalFeedback += feedback[key];
// }
// console.log(totalFeedback);

//МЕТОД(конструктор) "Object.values" получает из объекта массив значений свойств

// const values = Object.values(feedback);

// console.log(values);
