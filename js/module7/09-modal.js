//Открыть и закрыть по кнопке
//закрыть по клику в бекдроп
//Закрыть по ESC

const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector(
  'button[data-action="close-modal"]'
);
const backdropRef = document.querySelector(".js-backdrop");

openModalBtn.addEventListener("click", onOpenModal);
closeModalBtn.addEventListener("click", onCloseModal);
backdropRef.addEventListener("click", onBackdropClick);

function onOpenModal() {
  window.addEventListener("keydown", onPressEscape);
  document.body.classList.add("show-modal");
} //открытие модалки при клике на кнопу

function onCloseModal() {
  window.removeEventListener("keydown", onPressEscape);
  document.body.classList.remove("show-modal");
} //закрытие модалки при клике на кнопу

function onBackdropClick(event) {
  // console.log("event.target:", event.target);
  // console.log("event.currentTarget:", event.currentTarget);
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
} //закрытия модалки при клики в серую область

function onPressEscape(event) {
  if (event.code === "Escape") {
    onCloseModal();
    console.log("нажали Escape");
  } //закрытие модалки при нажатие на кнопку(Escape)
}
