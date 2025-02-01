// Define a function 'partial' that partially applies arguments to the left side of a function 'fn'
const partial =
  (fn, ...partials) =>
  (...args) =>
    fn(...partials, ...args);
const greet = (greeting, name) => greeting + " " + name + "!";
const greetHello = partial(greet, "Hello");
console.log(greetHello("John"));
