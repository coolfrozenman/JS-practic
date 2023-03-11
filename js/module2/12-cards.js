//работаем с коллецкией карточек(удоляем, обнавляем, добавляем)cvBN
//ЭТО УДАЛЕНИЕ

const cards = ["card1", "card2", "card3", "card4", "card5"];

const removeCrad = function (allCards, cardToRemove) {
  const index = allCards.indexOf(cardToRemove);

  if (index === -1) {
    console.log(`такой нету`);
    return; //ПАТТЕРН "GUARD CLAUSE"
  }
  allCards.splice(index, 1);
};
removeCrad(cards, "card2");
console.log(cards);

removeCrad(cards, "card22");
console.log(cards);

//ЭТО ДОБАВЛЕНИЕ

const addCard = function (allCards, insertCard, index) {
  allCards.splice(index, 0, insertCard);
};

addCard(cards, "жопу", 3);
console.log(cards);

/*
 * Используем цикл для вывода только нечетных чисел.
 * Для чётных i срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
// }
