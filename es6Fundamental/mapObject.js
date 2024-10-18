// Define the function 'mapObject' to map an array to an object using a given function.
const mapObject = (arr, fn) =>
  ((a) => (
    (a = [arr, arr.map(fn)]),
    a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})
  ))();

const squareIt = (arr) => mapObject(arr, (a) => a * a);

console.log(squareIt([1, 2, 3]));
