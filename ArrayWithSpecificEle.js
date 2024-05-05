// Function to check if an array contains a specific element
const contains = (arr, element) => {
  return arr.some(item => item === element);
};
const arr = [2, 5, 9, 6];

console.log(contains(arr, 5));
