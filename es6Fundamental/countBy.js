// Define a function 'countBy' that takes an array and a function (or property name) as arguments and returns an object.
const countBy = (arr, fn) =>
  arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

console.log(countBy([6, 10, 100, 10], Math.sqrt));
console.log(countBy([6.1, 4.2, 6.3], Math.floor));
console.log(countBy(["one", "two", "three"], "length"));
