// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
// const number = 40;

// ЛОГИЧЕСКОЕ "И" &&
// const isInRange = number > 10 && number < 30;
// console.log(`число ${number} попадает в отрезок от 10 до 30?`, isInRange);

// ЛОГИЧЕСКОЕ "ИЛИ" ||
// const isInRange = number < 10 || number > 30;
// console.log(
//   `число ${number} попадает в отрезок до 10 или после 30?`,
//   isInRange
// );

// ЛОГИЧЕСКОЕ "NOT"

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;

// console.log(`canOpenChat: `, canOpenChat);

const subscription = "free";

const canAccessContent = subscription === "pro" || subscription === "vip";

console.log("canAccessContent: ", canAccessContent);
