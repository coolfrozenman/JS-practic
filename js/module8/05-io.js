//IntersectionObserver API
//callback params

//https://developer.mozilla.org/ru/docs/Web/API/intersection_observer_APi

const option = {
  //   rootMargin: "100px",//переход в ИПОРТ с учётом отступов
  threshold: [0, 0.25, 0.5, 1], //выполняет колбєк несколько раз (0.1 значит что наш элемент зашёл в ИПОРТ на 10%)
};

const onEntry = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      console.log(`Box ${entry.target.textContent} пересекает Root`);

      observer.disconnect();
    }
  });
};

const io = new IntersectionObserver(onEntry, option);

const boxRef = document.querySelector(".js-box");

io.observe(boxRef);
