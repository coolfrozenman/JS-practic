const nameOutputRef = document.querySelector("#name-output");
const inputRef = document.querySelector("#name-input");

inputRef.addEventListener("input", onListenerInput);

function onListenerInput(event) {
  nameOutputRef.textContent = event.target.value;
  if (event.target.value === "") {
    nameOutputRef.textContent = "незнакомец";
  }
}
