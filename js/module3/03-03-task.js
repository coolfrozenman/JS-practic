const findBestEmployee = function (employees) {
  let theBestEmployees;
  let maxTotalEmployees = 0;

  //   for (const key in employees) {
  //     console.log(key);
  //     if (maxTotalEmployees < employees[key]) {
  //       maxTotalEmployees = employees[key];
  //       theBestEmployees = key;
  //     }
  //   }
  for (const [key, value] of Object.entries(employees)) {
    if (maxTotalEmployees < value) {
      maxTotalEmployees = value;
      theBestEmployees = key;
    }
  }

  return theBestEmployees;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
