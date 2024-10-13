// Define the function 'forOwn' to iterate over an object's own enumerable properties and apply a callback function to each property.
const forOwn = (obj, fn) =>
  Object.keys(obj).forEach((key) => fn(obj[key], key, obj));

forOwn({ foo: "bar", a: 1 }, (v) => console.log(v));
