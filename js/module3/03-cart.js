//РАБЛОТАЕМ С КОЛЛЕЕЦИЕЙ ТОВАРОВ В КОРЗИНЕ(тележка)
// {name: "apple", price: 50}
// {name: "grape", price: 70}
// {name: "lemon", price: 60}
// {name: "Strawberry", price: 110}

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }
    product.quantity = 1;
    this.items.push(product);
  },
  remove(productName) {
    console.log(productName);
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];
      console.log(item);
      if (productName === item.name) {
        console.log("нашли, delete");
        console.log(`index ${i}`);
        this.items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countyTotalPrice() {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    return total;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
        console.log("нашли");
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        if (item.quantity - 1 === 0) {
          this.remove(productName);
          return;
        }
        item.quantity -= 1;
        console.log("нашли");
      }
    }
  },
};

// console.table(cart.getItems());

// cart.remove("apple");

// console.table(cart.getItems());

//ТОВАРЫ В КОРЗИНЫ

cart.add({ name: "apple", price: 50 });
cart.add({ name: "apple", price: 50 });
cart.add({ name: "lemon", price: 60 });
cart.add({ name: "Strawberry", price: 110 });
cart.add({ name: "Strawberry", price: 110 });

console.table(cart.getItems());
console.log(cart.countyTotalPrice()); //общая стоимость товаров в корзине

cart.increaseQuantity("apple"); //копка "плюсик" для добавления ещё такого же товара в корзине
cart.increaseQuantity("apple");

console.log(cart.increaseQuantity());

console.table(cart.getItems());

cart.decreaseQuantity("lemon"); //копка "минус" для удаления ещё такого же товара в корзине

console.table(cart.getItems());
