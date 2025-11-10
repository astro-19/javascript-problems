// Define a function to find the maximum and minimum of two numbers
const max_min = (x, y) => {
    // Calculate the maximum value using bitwise XOR and conditional operator
    let max = x ^ ((x ^ y) & -((x < y) ? 1 : 0));
    // Calculate the minimum value using bitwise XOR and conditional operator
    let min = y ^ ((x ^ y) & -((x < y) ? 1 : 0));
    // Return an object containing the maximum and minimum values
    return { a: max, b: min };
}

// Define two numbers
let x = 12;
let y = 15;

// Display the two numbers
console.log("Two numbers: " + x + "," + y);
// Call the max_min function to find the maximum and minimum values
const { a, b } = max_min(x, y);
// Display the maximum and minimum values
console.log("Maximum value: " + a + " and Minimum value: " + b);
// x = -7
// y = -5
// console.log("Two numbers: " + x + "," + y)
// const {a,b} = max_min(x, y)
// console.log("Maximum value: " +a + " and Minimum value: " +b)
