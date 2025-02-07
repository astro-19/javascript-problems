// Define a function 'minN' that takes an array 'arr' and an optional parameter 'n' with a default value of 1
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

console.log(minN([1, 2, 3]));
console.log(minN([1, 2, 3], 2));
