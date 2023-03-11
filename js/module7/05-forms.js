//--событие submit
//--Действия браузера по умолчани
//--Свойства Elevents
// Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData

const formRef = document.querySelector(".js-register-form");

formRef.addEventListener("submit", (event) => {
  event.preventDefault(); //предотвращает дефолтное значение(нужно ставить для форм)

  const formRef = event.target;
  const formData = new FormData(formRef);
  const submittedData = {};

  formData.forEach((value, key) => {
    console.log("key:", key);
    console.log("value:", value);
    submittedData[key] = value; //получаем объект данных, который потом будем отправлсять на бэк=энд
  });
  console.log(submittedData);
  console.log(formRef.ellements); //все элементы формы
}); //так получают данные формы(value-значение;key-ключ)
