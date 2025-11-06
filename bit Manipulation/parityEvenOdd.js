// Define a function to determine the parity (even or odd) of a number
const parity_even_odd = (n) => {
    let parity = false; // Initialize parity as false (even)
    let temp = n; // Store the original value of n in a temporary variable
    while (n != 0) {
        // Check if the least significant bit (LSB) of n is 1
        if ((n & 1) !== 0) {
            parity = !parity; // Flip the parity if LSB is 1
        }
        n = n >> 1; // Right shift n by 1 bit
    }
    // Return a message indicating whether the parity is even or odd
    if (parity) {
        return "Parity of " + temp + " is odd.";
    } else {
        return "Parity of " + temp + " is even.";
    }
}

// Initialize variable n with a value
let n = 34;

// Display the binary representation of n
console.log(n + " in binary is " + n.toString(2));

// Call the parity_even_odd function to determine the parity of n
console.log(parity_even_odd(n));

// Update variable n with a new value
n = 104;

// Display the binary representation of n
console.log(n + " in binary is " + n.toString(2));

// Call the parity_even_odd function to determine the parity of n
console.log(parity_even_odd(n));
