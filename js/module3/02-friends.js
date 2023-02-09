const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

console.table(friends);

//НАХОДИМ ДРУГА

// const findfFriendsByname = function (allFriends, name) {
//   for (const friend of allFriends) {
//     if (friend.name === name) {
//       return "нашли";
//     }
//   }
//   return "не нашли";
// };
// console.log(findfFriendsByname(friends, "Poly"));
// console.log(findfFriendsByname(friends, "Dima"));

//ИЩЕМ ВСЕХ ДРУЗЕЙ

const getAllNames = function (allFriends) {
  let names = [];
  for (const friend of allFriends) {
    names.push(friend.name);
  }
  return names;
};

// console.log(getAllNames(friends));

//получаем имена друзей которые только онлайн

const friendsOnline = function (allFriends) {
  const names = [];

  for (const friend of allFriends) {
    console.log(friend);
    if (friend.online) {
      names.push(friend.name);
    }
  }
  return names;
};
console.log(friendsOnline(friends));
