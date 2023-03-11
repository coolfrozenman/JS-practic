//Типы событий: keypress, keydown, keyup
//ограничение keypress //работает только на клавиши с символами
//keydown реагирует на все клавиши(нажатие клавиши вниз)
//Свойства объета события клавиатуры

const outputRef = document.querySelector(".js-output");
const clearRef = document.querySelector(".js-clear");

window.addEventListener("keypress", onKeypress); //ввод символов
clearRef.addEventListener("click", onClearOutput); //функция очистки текста

function onKeypress(event) {
  //   console.log("event.key:", event.key); //key будет возвращать любой символ на любом языке(п)
  //   console.log("event.code:", event.code); //code возвращает именно кнопку которую нажимаем(keyG)

  //   if (event.code === "KeyG") {
  //     console.log("WIN!!!");

  //   }

  outputRef.textContent += event.key; //добавляет текст в дом
}

function onClearOutput() {
  outputRef.textContent = ""; //пустая строка
}
