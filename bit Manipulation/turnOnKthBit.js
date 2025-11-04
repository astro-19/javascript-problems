// Define a function to turn on the kth bit of a number
const turn_On_Kth_Bit = (n, k) => {
    // Check if the input is not a number
    if (typeof n != "number") {
        return 'It must be number!'; // Return an error message
    }
    // Return the result of performing a bitwise OR operation with the kth bit
    return n | (1 << (k - 1));
}

// Initialize variables n and k with values
let n = 33;
let k = 3;

// Display the binary representation of n
console.log(n + " in binary is " + n.toString(2));
console.log("Turning k'th bit on," + " k = " + k);

// Call the turn_On_Kth_Bit function and display the result
let result_n = turn_On_Kth_Bit(n, k);
console.log(result_n + " in binary is " + result_n.toString(2));

// Update variables n and k with new values
n = 101;
k = 5;

// Display the binary representation of n
console.log(n + " in binary is " + n.toString(2));
console.log("Turning k'th bit on," + " k = " + k);

// Call the turn_On_Kth_Bit function and display the result
result_n = turn_On_Kth_Bit(n, k);
console.log(result_n + " in binary is " + result_n.toString(2));
