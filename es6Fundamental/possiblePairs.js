// Define a function called `xProd` that computes the Cartesian product of two arrays.
const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);

console.log(xProd([1, 2], ['a', 'b'])); 
console.log(xProd([1, 2], [1, 2])); 
console.log(xProd(['a', 'b'], ['a', 'b'])); 
