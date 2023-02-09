//КОНТЕКСТ

// const showTag = function () {
//   console.log("this", this);
//   console.log("this.tag", this.tag);
// };

// const user = {
//   tag: "Mango",
// };

// user.showTag = showTag; //присвоение свойства объекту

// console.log(user);

// user.showTag();

//ТОЖЕ САММОЕ НАОБОРОТ

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("this", this);
//     console.log("this.tag", this.tag);
//   },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// console.log(outerShowTag);

//КОНТЕКСТ В callback-функциях

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("this", this);
//     console.log("this.tag", this.tag);
//   },
// };
// const invocAction = function (action) {
//   console.log(action);
//   action();
// };
// invocAction(user.showTag);//undefined

//ещё пример

// const makeChangeColot = function () {
//   const changeColor = function (color) {
//     console.log(this);
//     this.color = color;
//   };
//   return changeColor;
// };

// const hat = {
//   color: "blue",
//   changeColor: makeChangeColot(),
// };

// hat.changeColor("Orange");
// console.log(hat);

//ещё пример

const makeChangeColot = function () {
  const changeColor = function (color) {
    console.log(this);
  };
  changeColor(); //undefined

  const sweater = {
    color: "teal",
  };

  sweater.changeColor = changeColor;

  sweater.changeColor();

  return sweater.changeColor;
};
makeChangeColot(); // вернёт "sweater"
