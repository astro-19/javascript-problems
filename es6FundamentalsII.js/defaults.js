// Define a function 'defaults' to merge multiple objects with the same keys, prioritizing the values from right to left
const defaults = (obj, ...defs) =>
  Object.assign({}, obj, ...defs.reverse(), obj);

console.log(defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }));
