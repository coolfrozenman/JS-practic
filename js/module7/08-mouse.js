//mouseenter и mouseleave
//mouseover и mouseout
//mousemove (chatty event - болтливое событие)
//Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition

const boxRef = document.querySelector(".js-box");

boxRef.addEventListener("mouseenter", onBoxEnter);

boxRef.addEventListener("mouseleave", onBoxLeave);

function onBoxEnter(event) {
  console.log(event);
  event.target.classList.add("box--active");
}

function onBoxLeave(event) {
  console.log(event);
  event.target.classList.remove("box--active");
}

// boxRef.addEventListener("mousemove", (event) => {
//   console.log(event);
// });
