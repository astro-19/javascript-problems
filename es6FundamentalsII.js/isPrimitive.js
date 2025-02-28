// Define a function 'isPrimitive' that checks if the given value 'val' is a primitive type
const isPrimitive = (val) =>
  !["object", "function"].includes(typeof val) || val === null;

console.log(isPrimitive(null));
console.log(isPrimitive(50));
console.log(isPrimitive("Hello!"));
console.log(isPrimitive(false));
console.log(isPrimitive(Symbol()));
console.log(isPrimitive([]));
