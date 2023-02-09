// const userInput = prompt("Укажите страну доставки");
// const normolaizedInput = userInput.toLowerCase();

// let country;
// let credit;

// const defaultMessage = "В вашей стране доставка не доступна";
// console.log(normolaizedInput);
// switch (normolaizedInput) {
//   case "китай":
//     country = "Китай";
//     credit = 100;
//     break;
//   case "чили":
//     country = "Чили";
//     credit = 250;
//     break;
//   case "австралия":
//     country = "Австралия";
//     credit = 170;
//     break;
//   case "индия":
//     country = "Индия";
//     credit = 80;
//     break;
//   case "ямайка":
//     country = "Ямайку";
//     credit = 120;
//     break;
//   default:
//     alert(defaultMessage);
//     break;
// }

// if (country === undefined) {
//   console.log(defaultMessage);
// } else {
//   const message = `Доставка в ${country} будет стоить ${credit} кредитов`;
//   alert(message);
//   console.log(message);
// }

let userInput = prompt("введите страну куда нужно сделать доставку");
const normolaizedInput = userInput.toLowerCase();

let country;
let credit;

country = normolaizedInput;

switch (country) {
  case "индия":
    country = "Индию";
    credit = 80;
    console.log(`Доставка в ${country} будет стоить ${credit} кредитов`);
    break;

  case "китай":
    country = "Китай";
    credit = 100;
    console.log(`Доставка в ${country} будет стоить ${credit} кредитов`);
    break;

  case "ямайка":
    country = "Ямайку";
    credit = 120;
    console.log(`Доставка в ${country} будет стоить ${credit} кредитов`);
    break;

  case "австралия":
    country = "Австралию";
    credit = 170;
    console.log(`Доставка в ${country} будет стоить ${credit} кредитов`);
    break;

  case "чили":
    country = "Чили";
    credit = 250;
    console.log(`Доставка в ${country} будет стоить ${credit} кредитов`);
    break;
  default:
    alert("В вашей стране доставка не доступна");
}
