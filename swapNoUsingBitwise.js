// Define a function to swap the values of two variables using bitwise XOR operations
const swap = (x, y) => {
    x = x ^ y // Perform bitwise XOR to swap values
    y = x ^ y // Perform bitwise XOR to swap values
    x = x ^ y // Perform bitwise XOR to swap values
    return {a:x, b:y} // Return an object with the swapped values
  } 
  x = 12 
  y = 15 
  console.log("Before swap: x = " + x + " and y = " + y) 
  const {a,b} = swap(x, y) 
  console.log("After swap: x = " + a + " and y = " + b) 
  