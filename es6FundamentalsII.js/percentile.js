// Define a function 'percentile' that calculates the percentile of a given number in an array
const percentile = (arr, num) =>
  (arr.filter((item) => item <= num).length / arr.length) * 100;
console.log(percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
console.log(percentile([1, 2, 3, 4, 5, 6], 3));
console.log(percentile([1, 2, 3, 4, 5, 6], 4));
