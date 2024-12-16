// Define a function 'takeWhile' to retrieve elements from an array until a condition is no longer met
const takeWhile = (arr, func) => {
  for (const [i, val] of arr.entries()) if (func(val)) return arr.slice(0, i);
  return arr;
};

console.log(takeWhile([1, 2, 3, 4], (n) => n >= 3));
