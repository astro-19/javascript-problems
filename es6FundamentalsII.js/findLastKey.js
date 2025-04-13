// Define a function 'findLastKey' to find the last key in an object that satisfies a provided testing function
const findLastKey = (obj, fn) =>
  Object.keys(obj)
    .reverse()
    .find((key) => fn(obj[key], key, obj));
console.log(
  findLastKey(
    {
      barney: { age: 36, active: true },
      fred: { age: 40, active: false },
      pebbles: { age: 1, active: true },
    },
    (o) => o["active"]
  )
);
