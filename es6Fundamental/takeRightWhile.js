// Define the 'takeRightWhile' function.
const takeRightWhile = (arr, func) => {
  for (let i of arr.reverse().keys()) {
    if (!func(arr[i])) return arr.reverse().slice(arr.length - i, arr.length);
  }

  return arr;
};

console.log(takeRightWhile([1, 2, 3, 4], (n) => n < 3));
