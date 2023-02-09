const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let nameValue = [];
  for (const product of arr) {
    if (prop === "name") {
      nameValue.push(product.name);
    }
    if (prop === "quantity") {
      nameValue.push(product.quantity);
    }
    if (prop === "price") {
      nameValue.push(product.price);
    }
  }
  return nameValue;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []

console.log(getAllPropValues(products, "price")); // []
