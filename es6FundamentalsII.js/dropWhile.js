// Define a function 'dropWhile' to remove elements from the beginning of an array until a condition is met
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

console.log(dropWhile([1, 2, 3, 4], (n) => n >= 3)); // Output: [3, 4]
