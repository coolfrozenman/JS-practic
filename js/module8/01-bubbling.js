//Всплытие событие
//Исходный элемент: event.target и event.currentTarg

const refs = {
  parent: document.querySelector("#parent"),
  child: document.querySelector("#child"),
  innerChild: document.querySelector("#inner-child"),
};

const parentClickHandler = (event) => {
  console.log("target: ", event.target);
  console.log("currentTarget: ", event.currentTarget);
  alert("PARENT click handler");
};

const childClickHandler = (event) => {
  console.log("target: ", event.target);
  console.log("currentTarget: ", event.currentTarget);
  alert("CHILD click handler");
};

const innerClickChildHandler = (event) => {
  console.log("target: ", event.target);
  console.log("currentTarget: ", event.currentTarget);
  alert("INNER CHILD click handler");

  event.stopPropagation(); //отменяет всплытие
};

refs.parent.addEventListener("click", parentClickHandler);
refs.child.addEventListener("click", childClickHandler);
refs.innerChild.addEventListener("click", innerClickChildHandler);
