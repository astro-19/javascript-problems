// Define a function 'forOwnRight' that iterates over an object's own properties in reverse order and executes a function for each property
const forOwnRight = (obj, fn) =>
  Object.keys(obj)
    .reverse()
    .forEach((key) => fn(obj[key], key, obj));

console.log(forOwnRight({ foo: "bar", a: 1 }, (v) => console.log(v)));
