//Контекст стрелки

//Контекст внутри стрелки определяется местом ее объявления, а не вызова,
// и ссылается на контекст родительской функции

// const showThis = () => {
//   console.log("this is showThis:", this);
// };

// showThis(); //this is showThis: window

// const user={name: 'mango'}
// user.showContaxt = showThis

// user.showContaxt();// this in showThis: window

//стрелки как методі объекта

// const user = {
//   fullName: "Mango",
//   showName() {
//     console.log("this:", this);
//     console.log("this.fullName:", this.fullName);

//     const inner = () => {
//       console.log("this in inner:", this);
//     };
//     inner();
//   },
// };
// user.showName();

//стрелки не бывает методами объекта

// const user = {
//   fullName: "Mango",
//   showName: () => {
//     console.log("this:", this); //undefined
//     console.log("this.fullName:", this.fullName); //TypeError
//   },
// };
// user.showName();

//стрелка конструктор

// const User = (name) => {
//   this.name = name;
// };

// console.log(new User("mango")); //(TypeError) стрелочная функция не может быть конструктором

//ещё разок стрелка как метод объекта

const objA = {
  x: 5,
  showX() {
    console.log("this в objA.showX:", this.x);
    const objB = {
      y: 10,
      showThis: () => {
        console.log("this в objB.showThis:", this);
      },
    };
    objB.showThis();
  },
};
objA.showX();
