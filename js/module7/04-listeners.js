//События. СОздание и удаление слушаетеля
//Ссылочная идентичность
//Объект события

const targetBtnRef = document.querySelector(".js-target-btn");

// targetBtnRef.addEventListener("click", () => {
//   console.log("Clicked");
// }); //ТАК РЕГИСТРИРУЕТСЯ СОБЫТИЕ

const addListenBtnRef = document.querySelector(".js-add-listener");
const removeListenBtnRef = document.querySelector(".js-remove-listener");

// const doStuffOnClick = () => {
//   console.log("click!!!");
// };
// addListenBtnRef.addEventListener("click", () => {
//   targetBtnRef.addEventListener("click", doStuffOnClick);
// });
// removeListenBtnRef.addEventListener("click", () => {
//   targetBtnRef.removeEventListener("click", doStuffOnClick);
// });

targetBtnRef.addEventListener("click", (event) => {
  console.log(event.targex); //помагает достучаться до єлемента собітия
});
