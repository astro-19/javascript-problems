// Define a function called `every_nth` that filters an array and returns every nth element.
const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

console.log(every_nth([1, 2, 3, 4, 5, 6], 1)); 
console.log(every_nth([1, 2, 3, 4, 5, 6], 2)); 
console.log(every_nth([1, 2, 3, 4, 5, 6], 3)); 
console.log(every_nth([1, 2, 3, 4, 5, 6], 4)); 
