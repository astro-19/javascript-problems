// Define a function 'object_to_pairs' that takes an object 'obj' as input.
const object_to_pairs = (obj) => Object.keys(obj).map((k) => [k, obj[k]]);

console.log(object_to_pairs({ a: 1, b: 2 }));
console.log(object_to_pairs({ a: 1, b: 2, c: 3 }));
