// МАССИВЫ

// const friends = ["mango", "kiwi", "poly", "ajax"];

// console.log(friends);

// friends[3] = "Chelsy";

// console.log(friends);
// console.log(friends[3]);
// console.log(friends.length);

// friends[4] = "Kongo";

// console.log(friends);
// console.log(friends.length);

//Итерация по массиву

// for (let i = 0; i < friends.length; i += 1) {
//   console.log(friends[i]);
// }

//Упрощённый for of

// for (const friend of friends) {
//   console.log(friend);
// }

// BREAK AND CONTINUE

// const friends = ["mango", "kiwi", "poly", "ajax"];
// const nameToFind = "poly";
// let message = "not name";

// for (const friend of friends) {
//   if (nameToFind === friend) {
//     message = "found that name";
//     break;
//   }
// }

// console.log(message);

//МНОГОМЕРНЫЙ МАССИВ

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log(`Подмассив матрицы martix[i]: ${matrix[i]}`);
//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log(`Элементы подмассива матрици matrix[i] [j]: ${matrix[i][j]}`);
//     total += matrix[i][j];
//   }
// }
// console.log(total);
