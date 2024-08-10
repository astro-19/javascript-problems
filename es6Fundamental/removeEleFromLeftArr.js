// Define a function called `remove_from_left` that removes elements from the left side of an array.
function remove_from_left(arr, n = 1){
    return arr.slice(n); 
  }
  
  console.log(remove_from_left([1, 2, 3])); // [2, 3]
  console.log(remove_from_left([1, 2, 3], 1)); // [2, 3]
  console.log(remove_from_left([1, 2, 3], 2)); // [3]
  console.log(remove_from_left([1, 2, 3], 4)); // []
  