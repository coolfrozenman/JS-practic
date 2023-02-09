const showTag = function (arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3);
  console.log("this", this);
  console.log("this.tag", this.tag);
};

const mango = {
  tag: "Mango",
};

const poly = {
  tag: "Poly",
};
// showTag.call(mango. 1,2,3,4); //метод "call" помогает вызвать функцию в контексте какогото объетка
// showTag.call(poly); // это будет "this" внутри функции

// showTag.apply(mango, [1, 2, 3]);//такой же метод только другие значения передаются через массив

const showMangoTag = showTag.bind(mango); //этот метод, берёт функцию создаёт "КОПИЮ" с привязанным контекстом который я передам

showMangoTag(1, 2, 3);
