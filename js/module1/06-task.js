let total = 0;

while (true) {
  let input = prompt(`введи любое число`);

  if (input === null) {
    console.log(`closed`);
    break;
  }

  input = Number(input);

  const notANumber = Number.isNaN(input);

  if (notANumber) {
    console.log(`not a number`);
    continue;
  }

  total += input;
}
console.log(total);
