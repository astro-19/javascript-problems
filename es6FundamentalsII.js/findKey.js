// Define a function 'findKey' to find the first key in an object that satisfies a provided testing function
const findKey = (obj, fn) =>
  Object.keys(obj).find((key) => fn(obj[key], key, obj));
console.log(
  findKey(
    {
      barney: { age: 36, active: true },
      fred: { age: 40, active: false },
      pebbles: { age: 1, active: true },
    },
    (o) => o["active"]
  )
);
