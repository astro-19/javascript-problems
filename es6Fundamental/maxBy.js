// Define the function 'maxBy' to find the maximum value in an array based on a given function.
const maxBy = (arr, fn) =>
  Math.max(...arr.map(typeof fn === "function" ? fn : (val) => val[fn]));

console.log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n));
console.log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], "n"));
