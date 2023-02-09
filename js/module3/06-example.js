const profile = {
  name: "dima",
  tag: "frozen",
  location: "kamenskoe, ukraine",
  avatar:
    "https://i.pinimg.com/564x/90/ca/eb/90caebe912a86bbcbe41876b02f548b3.jpg",
  stats: {
    followers: 5345,
    views: 3443,
    likes: 1234,
  },
};

const makeProfileMarcup = function ({
  name,
  tag,
  location = "Planet Earth", //ТАК МОЖНО ПОСТАВИТЬ ДЕФОЛТНОЕ ЗНАЧЕНИЕ В ДЕСТРУКТУРИЗАЦИИ ЕСЛИ ПОЛЬЗОВАТЕЛЬ НЕЗАПОЛНИЛ ПОЛЕ
  avatar,
  stats: { followers, views, likes },
}) {
  return `<div>
    <img src="${avatar}" alt="user avatar">
    <p>${name}<spam>${tag}</spam></p>
    <p>Location:${location}</p>
    <ul>
        <li>followers: ${followers}</li>
        <li>views: ${views}</li>
        <li>likes: ${likes}</li>
    </ul>
  </div>;`;
};

const marcup = makeProfileMarcup(profile);

console.log(marcup);

document.body.insertAdjacentHTML("afterbegin", makeProfileMarcup(profile));
