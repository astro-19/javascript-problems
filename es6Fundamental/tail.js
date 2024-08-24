// Define a function named tail that returns all elements of an array except the first one.
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

console.log(tail([1, 2, 3])); 
console.log(tail([1]));       
