// Define a function 'minBy' that takes an array 'arr' and a function 'fn'
const minBy = (arr, fn) =>
  Math.min(...arr.map(typeof fn === "function" ? fn : (val) => val[fn]));

console.log(minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n));
console.log(minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], "n"));
