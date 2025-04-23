// Define a function 'difference' to find the difference between two arrays
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter((x) => !s.has(x));
};

console.log(difference([1, 2, 3], [1, 2, 4]));
console.log(difference([1, 2, 4], [1, 2, 3]));
