const refs = {
  tags: document.querySelector(".js-tags"),
  activeTagOutput: document.querySelector(".js-active-tag"),
};

refs.tags.addEventListener("click", onTagsClick);

function onTagsClick(event) {
  //   console.log(event.target.nodeName); //имя тэга заглавными БУКВАМИ(BUTTON)
  if (event.target.nodeName !== "BUTTON") {
    console.log("клик не по кнопке, выходим и ничего не делаем");
    return;
  }
  setActiveTag(event.target);

  updateOutput(event.target.dataset.value);
}

function setActiveTag(nextActiveTag) {
  const currentActivetag = refs.tags.querySelector(".tags__btn--active");

  if (currentActivetag) {
    currentActivetag.classList.remove("tags__btn--active");
  }

  nextActiveTag.classList.add("tags__btn--active");
}

function updateOutput(value) {
  refs.activeTagOutput.textContent = value;
}
