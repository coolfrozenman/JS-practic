import galleryItems from "../js/app.js";

const refs = {
  gallery: document.querySelector(".js-gallery"),
  largeImages: document.querySelector(".lightbox__image"),
  lightbox: document.querySelector(".js-lightbox"),
  closedButton: document.querySelector(".lightbox__button"),
};
//мой вариант

// const creatGallery = (item) => {
//   const liRef = document.createElement("li");
//   liRef.classList.add("gallery__item");

//   refs.gallery.append(liRef);

//   const linkRef = document.createElement("a");
//   linkRef.classList.add("gallery__link");

//   liRef.append(linkRef);

//   const imgRef = document.createElement("img");
//   imgRef.classList.add("gallery__image");
//   imgRef.setAttribute("src", item.preview);
//   imgRef.setAttribute("alt", item.description);

//   linkRef.append(imgRef);
//   linkRef.addEventListener("click", openLargeImage);

//   function openLargeImage(event) {
//     event.preventDefault();
//     window.addEventListener("keydown", onPressEscape);
//     refs.largeImages.src = item.original;
//     refs.largeImages.alt = item.description;
//     refs.lightbox.classList.add("is-open");
//   }

//   refs.gallery.innerHtml = `<li class="gallery__item" src=${item.preview}> </li>   `;
// };

// const gallery = galleryItems.forEach((item) => {
//   creatGallery(item);
// });

//Андрюхин вариант
const createCard = (cards) => {
  return cards
    .map(
      ({ preview, description, original }) =>
        `<li class="gallery__item">
          <a class="gallery__link"> 
            <img src=${preview} alt=${description} class="gallery__image" data-img="${original}"/>
          </a>
        </li>`
    )
    .join("");
};

const cardsGallery = createCard(galleryItems);
refs.gallery.insertAdjacentHTML("afterbegin", cardsGallery);

refs.gallery.addEventListener("click", openLargeImage);
refs.closedButton.addEventListener("click", closedLargeImage);

function openLargeImage(event) {
  if (event.target.nodeName === "IMG") {
    event.preventDefault();

    window.addEventListener("keydown", onPressEscape);
    refs.largeImages.src = event.target.getAttribute("data-img");
    refs.largeImages.alt = event.target.getAttribute("alt");
    refs.lightbox.classList.add("is-open");
  }
} //пример всплытия

function closedLargeImage() {
  window.removeEventListener("keydown", onPressEscape);
  refs.lightbox.classList.remove("is-open");
  refs.largeImages.src = "";
  refs.largeImages.alt = "";
}

function onPressEscape(event) {
  if (event.code === "Escape") {
    closedLargeImage();
  }
}
