// Define the function 'forEachRight' to iterate over an array in reverse order and apply a callback function to each element.
const forEachRight = (arr, callback) =>
  arr.slice(0).reverse().forEach(callback);
forEachRight([1, 2, 3, 4], (val) => console.log(val));
