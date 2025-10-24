// Define a function to swap the values of two variables using bitwise XOR operations
const swap = (x, y) => {
    x = x ^ y // Perform bitwise XOR to swap values
    y = x ^ y // Perform bitwise XOR to swap values
    x = x ^ y // Perform bitwise XOR to swap values
    return { a: x, b: y } // Return an object with the swapped values
}
x = 12 // Assign a value to variable x
y = 15 // Assign a value to variable y
console.log("Before swap: x = " + x + " and y = " + y) // Print the values of x and y before swapping
const { a, b } = swap(x, y) // Call the swap function and destructure the returned object
console.log("After swap: x = " + a + " and y = " + b) // Print the values of x and y after swapping
