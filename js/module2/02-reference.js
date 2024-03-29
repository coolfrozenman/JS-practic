// ссылочный тип

//"ПРИМЕТИВНЫЙ ТИП" (ДЕЛАЕТ НОВУЮ КОПИЮ)

// let a = 5;
// let b = a;

// console.log("a", a);
// console.log("b", b);

// a = 10;

// console.log("a", a);
// console.log("b", b);

//"СЛОЖНЫЙ ТИП" (УКАЗЫВАЕТ НА ОДНУ И ТУЖЕ ЯЧЕЙКУ ПАМЯТИ И НЕ ДЕЛАЕТ КОПИЮ)

// const a = [1, 2, 3];
// const b = a;

// a[0] = 10;

// console.log("a", a);
// console.log("b", b);

// b[1] = 40;

// console.log("a", a);
// console.log("b", b);

//"ПРИМИТИВНЫЕ ТИПЫ" СРАВНИВАЮТСЯ ПО ЗНАЧЕНИЮ И МОГУТ БЫТЬ РАВНЫ, ЕСЛИ ИХ СИМВОЛЫ ОДИНАКОВЫ

// let a = 5;

// console.log(a === 5); //true

//"СЛОЖНЫЕ ТИПЫ" НЕ МОГУТ БЫТЬ РАВНЫ, ОНИ СРАВНИВАЮТЬСЯ ПО РАСПОЛОЖЕНИЮ В ПАМЯТИ,
//А ИХ РАСПОЛОЖЕНИЕ РАЗНОЕ ПО ЭТОМУ ОНИ НЕ РАВНЫ

// console.log([1, 2, 3] === [1, 2, 3]); //false

//В ЭТОМ СЛУЧАЕ "СЛОЖНЫЕ ТИПЫ" МОГУТ БЫТЬ РАВНЫ, ПО ТОМУ ЧТО ОНИ ВИДУТ В ОДНО МЕСТО ПАМЯТИ

let a = [1, 2, 3];
let b = a;

console.log(a === b); //true

const c = [1, 2, 3];
const d = [1, 2, 3];

console.log(c === d); //false
