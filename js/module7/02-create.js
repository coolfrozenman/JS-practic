//СОЗДАНИЕ ЭЛЕМНТОВ
// const titleRef = document.createElement("h1");

// titleRef.textContent = "Fuck you";
// titleRef.classList.add("site-title");

// console.log(titleRef);

const product = {
  name: "Сервоприводы",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nemo excepturi, hic officia iste",
  price: 2000,
  available: true,
};

const containerRef = document.createElement("div");
containerRef.classList.add("product-cart");

const titleRef = document.createElement("h2");
titleRef.classList.add("product-cart__name");
titleRef.textContent = product.name;
// console.log(titleRef);

const descrRef = document.createElement("p");
descrRef.classList.add("product-cart__text");
descrRef.textContent = product.description;
// console.log(descrRef);

const priceRef = document.createElement("p");
priceRef.classList.add("product-cart__price");
priceRef.textContent = `цена: ${product.price} кредитов`;
// console.log(priceRef);

const availRef = document.createElement("p");
availRef.classList.add("product-cart__avail");
availRef.textContent = product.available;
// console.log(availRef);

//СОЗДАНИЕ УЗЛОВ с createElement

// containerRef.appendChild(titleRef);//можно добавить только по одному
// containerRef.appendChild(descrRef);
// containerRef.appendChild(priceRef);

//Методы append/prepend,before/after, replaceWith

containerRef.append(titleRef, descrRef, priceRef); //можно добавлять сразу несколько элементов(в том порядке в котором и передаём)
console.log(containerRef);
// --- prepend вставяет элемнеты в начало кода
// --- insertBefore (элеиент который нужно вставить, элемент перед которым нужно вставить)//добавляет элемент в любое место перед любым другим элементом

//ДОБАВЛЕНЯЕМ В ДОМ СВОЙ ДИВ

const cardRootRef = document.querySelector("#root");

cardRootRef.appendChild(containerRef);
