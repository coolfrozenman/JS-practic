//КОНТЕКСТ ВПОЛНЕНИЯ И СТЕК ВЫЗОВОВ

const bar = function () {
  console.log("bar");
};

const baz = function () {
  console.log("baz");
};

const foo = function () {
  console.log("foo");
  bar();
  baz();
};

foo();
