// Define a function 'nthElement' that takes an array 'arr' and an optional parameter 'n' (defaulted to 0)
const nthElement = (arr, n = 0) =>
  (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];
console.log(nthElement(["a", "b", "c"], 1));
console.log(nthElement(["a", "b", "b"], -3));
