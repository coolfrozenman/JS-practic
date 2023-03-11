let counterValue = 0;
const counterValueRef = document.querySelector(".value");
const buttonDecrementRef = document.querySelector(
  "button[data-action='decrement']"
);
const buttonIncrementRef = document.querySelector(
  "button[data-action='increment']"
);

buttonIncrementRef.addEventListener("click", onIncrement);
buttonDecrementRef.addEventListener("click", onDecrement);

function onDecrement() {
  if (counterValueRef.textContent > 0) {
    counterValue -= 1;
    counterValueRef.textContent = counterValue;
  }
}

function onIncrement() {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
}
