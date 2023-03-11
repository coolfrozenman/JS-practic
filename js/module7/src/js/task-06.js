const inputRef = document.querySelector("#validation-input");
const borderGreenRef = document.querySelector("#validation-input.valid");

inputRef.addEventListener("blur", onInputBorderColor);

function onInputBorderColor(event) {
  if (event.target.value.length < 6 || event.target.value.length > 6) {
    event.target.classList.add("invalid");
  } else if (event.target.value.length === 6) {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  }
}
