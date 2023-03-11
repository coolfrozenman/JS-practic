//События input и change
//Чекбоксы и свойство checked
const btnRef = document.querySelector(".js-button");
const inputRef = document.querySelector(".js-input");
const nameLabelRef = document.querySelector(".js-button > span");
const licenseRef = document.querySelector(".js-license");

inputRef.addEventListener("focus", handleLisenceFocus);
inputRef.addEventListener("blur", handleLisenceBlur);
inputRef.addEventListener("input", handleInputInput);
licenseRef.addEventListener("change", handleLisenceChange);

function handleLisenceFocus(event) {
  console.log("Получил фокус");
}

function handleLisenceBlur(event) {
  console.log("Потерял фокус");
}

function handleInputInput(event) {
  nameLabelRef.textContent = event.target.value;
}

function handleLisenceChange(event) {
  btnRef.disabled = !event.target.checked;
}

//тут был сделан РЕФАКТОРИНГ для более удобной читабельности кода
