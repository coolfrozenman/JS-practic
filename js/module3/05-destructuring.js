//ДЕСТРУКТУРИЗАЦИЯ объекта
const hotel = {
  name: "Resolt Hotel",
  stars: 5,
  capacity: 100,
};

// const { name, stars, capacity } = hotel; //ЭТО И ЕСТЬ СИНТАКСИС ДЕСТРУКТУРИЗАЦИЯ. НУЖЕН ДЛЯ ТОГО ЧТОБЫ НЕ ПИСАТЬ (hotel.name, hotel.stars и т.д.)

// console.log("name:", name);
// console.log("stars:", stars);
// console.log("capacity:", capacity);

const showHotelInfo = function (
  { name, stars, capacity } //  //ДЭСТРУКТУРИЗАЦИЯ ВНУТРИ ФУНКЦИИ
) {
  // const { name, stars, capacity } = hotelStats;

  console.log("name:", name);
  console.log("stars:", stars);
  console.log("capacity:", capacity);
};

showHotelInfo(hotel);

// const { name: hotelName = "", stars, capacity } = hotel; //пример как переназвать свойство

// console.log(hotelName);
//ГЛУБОКАЯ ДЕСТРУКТУРИЗАЦИЯ объекта

// const profile = {
//   name: "dima",
//   tag: "frozen",
//   location: "kamenskoe, ukraine",
//   avatar: "https://www.etsy.com/your/shops/me/dashboard?ref=hdr-mcpa",
//   stats: {
//     followers: 5345,
//     views: 3443,
//     likes: 1234,
//   },
// };

// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// } = profile;

// console.log(name, tag, location, avatar, followers, views, likes);

//ДЕСТРУКТУРИЗАЦИЯ МАССИВА

// const rgb = [232, 43, 84];

// const [red, green, blue] = rgb;

// console.log(red, green, blue);

// const profile = {
//   name: "dima",
//   tag: "frozen",
//   location: "kamenskoe, ukraine",
//   avatar: "https://www.etsy.com/your/shops/me/dashboard?ref=hdr-mcpa",
//   stats: {
//     followers: 5345,
//     views: 3443,
//     likes: 1234,
//   },
// };

// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);
