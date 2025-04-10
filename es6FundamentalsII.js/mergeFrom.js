// Define a function 'flip' that takes a function 'fn' as input and returns a new function that flips the first two arguments before calling 'fn'
const flip =
  (fn) =>
  (first, ...rest) =>
    fn(...rest, first);

let a = { name: "John Smith" };
let b = {};

// Define a function 'mergeFrom' using 'flip' and 'Object.assign' that merges the properties of the second object into the first object
const mergeFrom = flip(Object.assign);

let mergePerson = mergeFrom.bind(null, a);

mergePerson(b);
b = {};

console.log(Object.assign(b, a)); // == b
