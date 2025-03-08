// Define a function 'isFunction' that checks if the given value 'val' is a function
const isFunction = (val) => typeof val === "function";

console.log(isFunction("x"));
console.log(isFunction((x) => x));
