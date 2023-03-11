const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const allIngridient = ingredients.forEach((ingr) => {
  const ingrEl = document.createElement("li");
  ingrEl.textContent = ingr;
  const ingredientsRef = document.querySelector("#ingredients");
  ingredientsRef.append(ingrEl);
});
