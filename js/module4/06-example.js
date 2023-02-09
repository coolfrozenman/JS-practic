const cart = {
  items: ["Телефон", "Наушники"],
  showItem() {
    console.log("this:", this);
    console.log("this.items:", this.items);
  },
};

document
  .querySelector(".js-show-items")
  .addEventListener("click", cart.showItem.bind(cart));
