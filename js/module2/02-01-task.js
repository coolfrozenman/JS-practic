// const logItems = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// const item = "Kong";
// let result;
// for (const logItem of logItems) {
//   if (item === logItem) {
//     result = logItems.indexOf(logItem) + 1;
//     console.log(`${result} - ${logItem}`);
//   }
// }

// const items = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong", "Luba"];

// const logItems = function (array) {
//   for (const item of array) {
//     const result = array.indexOf(item) + 1;

//     console.log(`${result} - ${item}`);
//   }
// };

// logItems(items);

const logItems = function (items) {
  for (let i = 0; i < items.length; i += 1) {
    const value = i + 1;
    console.log(`${value} - ${items[i]}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
