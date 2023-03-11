const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", onTextSize);

function onTextSize(event) {
  textRef.style.fontSize = event.target.value + "px";
}
