const titleRef = document.querySelector(".page-title"); //находит первый подъодящий элемент по имени класса
// console.dir(titleRef);

titleRef.textContent = "hello Frozen"; //textContent меняет текстовй контент

const linksRef = document.querySelectorAll(".nav__link"); //находит все єлементі с таким именем класса и передаёт их в один массив, если такой єлемент ненаходит возвращает пустой массив
// console.log(linksRef);

const imageRef = document.querySelector(".hero-image");

// console.dir(imageRef);
// console.log(imageRef.src);
// console.log(imageRef.alt);

// imageRef.src =
//   "https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480";
imageRef.alt = "это моя фотка";
// console.log(imageRef.alt);
// console.log(imageRef.getAttribute("alt"));

// const activeLinkRef = document.querySelector(".nav__link--active");
// activeLinkRef.style.color = "orange"; //так можно заменить стили(цвета, шрифт и т.д.)
// console.dir(activeLinkRef);

//АТРИБУТЫ
//методы "atribute" дяют доступ к атрибутам HTML документа

imageRef.setAttribute(
  "src",
  "https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480"
); //(имя атрибута, значение атрибута)

//СВОЙСТВА element.classList

const activeLinkRef = document.querySelector(".nav__link--active");
activeLinkRef.classList.add("orange__link"); //добавляет ещё одно имя класса

console.log(activeLinkRef.classList.contains("orange")); // скажет true или false если есть такое свойство или нет
console.dir(activeLinkRef);
