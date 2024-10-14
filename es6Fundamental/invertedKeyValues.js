// Define the function 'invertKeyValues' to invert the keys and values of an object, optionally applying a function to the values.
const invertKeyValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, key) => {
    const val = fn ? fn(obj[key]) : obj[key];
    acc[val] = acc[val] || [];
    acc[val].push(key);
    return acc;
  }, {});

console.log(invertKeyValues({ a: 1, b: 2, c: 1 }));
console.log(invertKeyValues({ a: 1, b: 2, c: 1 }, (value) => "group" + value));
