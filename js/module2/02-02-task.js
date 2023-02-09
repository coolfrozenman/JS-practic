// const calculateEngravingPrice = function (message, pricePerWord) {
//   const array = message.split(" ");
//   for (let i = 0; i < message.length; i += 1) {
//     if (message[i] < message.length) {
//       const result = array.length * pricePerWord;
//       return result;
//     }
//   }
// };

const calculateEngravingPrice = function (message, pricePerWord) {
  let result;
  message = message.split(" ");
  for (let i = 0; i < message.length; i += 1) {
    result = message.length * pricePerWord;
  }
  return result;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120
