// Define a function called `remove_from_right` that removes elements from the right side of an array.
function remove_from_right(arr, n = -1){
  return arr.slice(n); 
}

console.log(remove_from_right([1, 2, 3])); 
console.log(remove_from_right([1, 2, 3], -1)); 
console.log(remove_from_right([1, 2, 3], -2)); 
console.log(remove_from_right([1, 2, 3], -4)); 
