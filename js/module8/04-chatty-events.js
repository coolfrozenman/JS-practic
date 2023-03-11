//Chatty events
//Приём throttling и deboncing c Lodash //патерны

//Mousemove

//throtlle тормозит віполнение функции на движение мышки на время которе мы укажем

const coordsOutputRef = document.querySelector(".js-coords");
let mouseMoveCallbackCounter = 0;

const throttledCallback = _.throttle((event) => {
  mouseMoveCallbackCounter += 1;

  coordsOutputRef.textContent = `кол-во вызовов callback-функции: ${mouseMoveCallbackCounter},
      X: ${event.clientX},
      Y: ${event.clientY}
      `;
}, 300);

window.addEventListener("mousemove", throttledCallback);

//Input

//debounce тормозит выполнение функции пока пользователь не сделат паузу в вводе
const inputRef = document.querySelector(".js-input");
const outputRef = document.querySelector(".js-output");
let inputCallbackCounter = 0;

const debouncedInputCallbak = _.debounce((event) => {
  inputCallbackCounter += 1;

  outputRef.textContent = `
      кол-во вызовов callback-функции: ${inputCallbackCounter},
      Значение: ${event.target.value}
       `;
}, 500);

inputRef.addEventListener("input", debouncedInputCallbak);
