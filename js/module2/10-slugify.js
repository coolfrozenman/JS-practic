/*
 *делаем slug в URL из названия статьи (например на dev.to)
 *Data protaction and protecting your users in light of GDPR
 *How to Find Uinque and Memorable Name for Your Product
 *Build Mean Stack Aplication
 *11 fruitful resorces ti improve Javascript knowledge
 */

//ДЕЛАЕМ slug ПРИ ПОМОЩИ ФУНКЦИИ

const slugify = function (string) {
  const words = string.toLowerCase().split(" ");
  const slug = words.join("-");
  return slug;
};

// const slug1 = slugify("top 10 benefits of React framework");
// console.log(slug1);

// const slug2 = slugify(
//   "Data protaction and protecting your users in light of GDPR"
// );
// console.log(slug2);

//ДОБОВЛЯЕМ МАССИВ СЛАГОВ
const articles = [
  "top 10 benefits of React framework",
  "Data protaction and protecting your users in light of GDPR",
  "How to Find Uinque and Memorable Name for Your Product",
  "Build Mean Stack Aplication",
  "11 fruitful resorces ti improve Javascript knowledge",
];
const slugs = [];

for (const article of articles) {
  const slug = slugify(article);
  slugs.push(slug);
}

console.log(slugs);
