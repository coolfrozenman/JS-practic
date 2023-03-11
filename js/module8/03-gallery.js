const refs = {
  gallery: document.querySelector(".js-gallery"),
  largeImage: document.querySelector(".js-large-image"),
};

refs.gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault(); //прикращение дэфолтного повидения

  if (event.target.nodeName !== "IMG") {
    return;
  }
  console.log("кликнули по картинке");

  const largeImageURL = event.target.dataset.source;

  setLargeImageSrc(largeImageURL);
}

function setLargeImageSrc(url) {
  refs.largeImage.src = url;
}
