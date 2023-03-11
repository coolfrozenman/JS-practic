const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const createImg = (img) => {
//   const galleryLi = document.createElement("li");
//   galleryLi.classList.add("gallery-card");
//   const galleryImg = document.createElement("img");
//   galleryImg.classList.add("gallery-card__img");
//   galleryImg.setAttribute("src", img.url);
//   galleryImg.setAttribute("alt", img.alt);

//   galleryLi.append(galleryImg);
//   const galleryRef = document.querySelector("#gallery");
//   galleryRef.append(galleryLi);
// };

// const imgCard = images.forEach((img) => createImg(img));
const imgCard = images.forEach((img) => {
  const galleryLi = document.createElement("li");
  galleryLi.classList.add("gallery-card");
  const galleryImg = document.createElement("img");
  galleryImg.classList.add("gallery-card__img");
  galleryImg.setAttribute("src", img.url);
  galleryImg.setAttribute("alt", img.alt);

  galleryLi.append(galleryImg);
  const galleryRef = document.querySelector("#gallery");
  galleryRef.append(galleryLi);
});
