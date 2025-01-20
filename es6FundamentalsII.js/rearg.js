// Define a function 'rearg' that rearranges the arguments passed to another function based on specified indexes
// It takes two parameters:
// 1. 'fn': The function whose arguments need to be rearranged
// 2. 'indexes': An array of indexes specifying the new order of arguments

const rearg =
  (fn, indexes) =>
  (...args) =>
    fn(...indexes.map((i) => args[i]));

var rearged = rearg(
  function (a, b, c) {
    return [a, b, c];
  },
  [2, 0, 1]
);

console.log(rearged("b", "c", "a"));
