//МЕТОД ".splice" ДЕЛАЕТ УДАЛЕНИЕ ЭЛЕМЕНТОВ ИЗ МАССИВА

// const cards = ["card1", "card2", "card3", "card4", "card5"];

// cards.splice(1, 1); //первое значение: индекса элемента, второе значение: количество элементов

// console.log(cards);

// console.log(cards.indexOf("card5")); //так можно узнать индекс элемента примитивный типов

//ПРИМЕР как найти карточку и удалить её

// const cardToRemove = "card2";
// const index = cards.indexOf(cardToRemove);

// cards.splice(index, 1);
// console.log(cards);

//ПРИ ПОМОЩИ ".splice" ТАК ЖЕ МОЖНО И ДОБАВЛЯТЬ ЭЛЕМЕНТЫ В СЕРЕДИНУ КОЛЛЕКЦИИ
//ПРИМЕР НИЖЕ

// const cards = ["card1", "card2", "card3", "card4", "card5"];

const cardToInset = "card9";
const index = cards.indexOf(cardToInset);
cards.splice(2, 0, cardToInset); //выбераем индекс элемента после которого нужно вставить, следующее ставим 0 удалений и последнее вставляем элемент
console.log(cards);

//обновить(заменить)

// const cards = ["card1", "card2", "card3", "card4", "card5"];
// cards.splice(2, 1, "card2modded");
// console.log(cards);
