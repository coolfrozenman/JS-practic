//МЕТОД ".split" РАЗБИВАЕТ СТРОКУ ПО РАЗДЕЛИТЕЛЮ
//(НАПРИМЕР ПО ПРОБЕЛУ, ЧТО БЫ ОТДЕЛИТЬ КАЖДОЕ СЛОВО .split(' ') )

// const titles = "top 10 benefits of React Framework";

// console.log(titles.split(" "));
// for (const title of titles.split(" ")) {
//   console.log(title);
// }

//МЕТОД ".join" ОН БЕРЁТ МАССИВ ЭЛЕМЕНТОВ И СОБИРАЕТ ЕГО В ОДНУ СТРОКУ

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// console.log(numbers.join("+"));

//ПРИМЕР КАК ПРИ ПОМОЩИ ЭТИХ МЕТОРДОВ

// const title = "Top 10 Benefits Of React Framework";
// const normalizedTitle = title.toLocaleLowerCase();

// console.log(normalizedTitle);

// const words = normalizedTitle.split(" ");

// console.log(words);

// const slug = words.join("-");

// console.log(slug);

//ТОТ ЖЕ ПРИМЕР ТОЛЬКО БОЛЕЕ ПРОСТАЯ ЗАПИСЬ КОДА

// const title = "Top 10 Benefits Of React Framework";
// const slug = title.toLocaleLowerCase().split(" ").join("-");

// console.log(slug);

//ЧИТАБЕЛЬНЫЙ ВАРИАНТ ДЛЯ РАЗРАБОТЧИКОВ

// const title = "top 10 benefits of React Framework";
// const words = title.toLowerCase().split(" ");
// const slug = words.join("-");

// console.log(slug);

//а теперь тоже самое при помощи цикла(.join руками для практики циклов)

const title = "top 10 benefits of React Framework";
const words = title.toLocaleLowerCase().split(" ");
let slug = "";

for (let i = 0; i < words.length; i += 1) {
  if (i !== words.length - 1) {
    slug += words[i] + "-";
  } else {
    slug += words[i];
  }

  // const isNotLastValue = i !== words.length - 1;
  //  slug += isNotLastValue ? words[i] + "-" : words[i];// ТЭРНАРНАЯ ЗАПИСЬ(упрощённая запись, кто есть всего два варианта)
}
console.log(slug);
