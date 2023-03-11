//Intersection Observer c unobserver (один на все)

// const images = document.querySelectorAll(".feed img");

// const option = {
//   rootMargin: "100px",
// };
// const io = new IntersectionObserver((entries, observer) => {
//   console.log(".|.");
//
// }, option);

// images.forEach((image) => io.observe(image));

//Intersection Observer c disconnect (на каждый свой)

const images = document.querySelectorAll(".feed img");

const lazyLoad = (target) => {
  const option = {
    rootMargin: "100px",
  };

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target;
        const src = image.dataset.lazy;

        image.src = src;
        image.classList.add("appear");
        observer.disconnect();
      }
    });
  }, option);

  io.observe(target);
};

images.forEach((image) => lazyLoad(image));
