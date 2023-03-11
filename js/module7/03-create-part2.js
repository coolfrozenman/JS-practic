import products from "./products.js";

console.table(products);

const createCard = (product) => {
  const containerRef = document.createElement("div");
  containerRef.classList.add("product-cart");

  const titleRef = document.createElement("h2");

  const inStockClass = product.available
    ? "product-cart__name--available"
    : "product-cart__name--not-available";

  titleRef.classList.add("product-cart__name", inStockClass);
  titleRef.textContent = product.name;

  const descrRef = document.createElement("p");
  descrRef.classList.add("product-cart__text");
  descrRef.textContent = product.description;

  const priceRef = document.createElement("p");
  priceRef.classList.add("product-cart__price");
  priceRef.textContent = `цена: ${product.price} кредитов`;

  containerRef.append(titleRef, descrRef, priceRef);

  return containerRef;
};
const productCard = products.map((product) => createCard(product));

console.log(productCard);

const productListRef = document.querySelector(".js-products");

console.log(productListRef);

productListRef.append(...productCard);
