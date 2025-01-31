// Define a function 'partialRight' that partially applies arguments to the right side of a function 'fn'
const partialRight =
  (fn, ...partials) =>
  (...args) =>
    fn(...args, ...partials);
const greet = (greeting, name) => greeting + " " + name + "!";
const greetJohn = partialRight(greet, "John");
console.log(greetJohn("Hello"));
