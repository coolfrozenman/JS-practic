// функции findSmallestNumber поиск самого маленького элемента массива

// const numbers = [54, 56, 96, 82, 48, 85, 36, 97, 1];

// const numbers2 = [77, 55, 35, 6, 3, 86, 89];

const findSmallestNumber = function (items) {
  let smallestNumber = items[0];
  for (let i = 1; i < items.length; i += 1) {
    if (items[i] < smallestNumber) {
      smallestNumber = items[i];
    }
  }
  return smallestNumber;
};

console.log(findSmallestNumber([54, 56, 96, 82, 48, 85, 36, 97, 1]));

console.log(findSmallestNumber([77, 55, 35, 6, 3, 86, 89]));

// const findSmallestNumber = function (items) {
//   let smallestNumber = items[0];

//   for (let i = 1; i < items.length; i = i + 1) {
//     console.log("items", items[i]);
//     console.log("smallestNumber", smallestNumber);
//     if (items[i] < smallestNumber) {
//       smallestNumber = items[i];
//     }
//   }
//   return smallestNumber;
// };
// const r1 = findSmallestNumber(numbers);
// console.log(r1);

// const r2 = findSmallestNumber(numbers2);
// console.log(r2);
