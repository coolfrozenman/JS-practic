// МЕТОД ".includes" ПЕРЕБИРАЕТ ПРИМИТИВНЫЕ ЭЛЕМЕНТЫ И НАХОДИТ НУЖНЫЙ
//(НИЖЕ ПРИМЕР ЧТО ОН ДЕЛАЕТ ПОД КАПОТОМ)

// проверяем сотрудника на рабочем месте

// const staff = ["mango", "kiwi", "poly", "ajax"];
// const query = "mango2";
// let result = "сотрудника нет";

// for (const employee of staff) {
//   console.log(employee);
//   if (employee === query) {
//     result = "на рабочем месте";
//     break;
//   }
// }
// console.log(result);

//ПРИМЕР КАК ИСПОЛЬЗУЕТСЯ ЭТОТ МЕТОД

const staff = ["mango", "kiwi", "poly", "ajax"];
const query = "mango2";

const result = staff.includes(query)
  ? "сотрудник на рабочем месте"
  : "сотрудника нет";

console.log(result);
