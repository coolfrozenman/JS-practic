const itemsRef = document.querySelectorAll(".item");
console.log(`в списке ${itemsRef.length} категории`);

const elements = itemsRef.forEach((elem) => {
  const category = elem.firstElementChild.textContent;
  const quantityElem = elem.children[1].children.length;
  console.log(`Категория: ${category} \nКоличество элементов: ${quantityElem}`);
});
