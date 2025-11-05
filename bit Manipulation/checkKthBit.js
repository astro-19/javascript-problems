// Define a function to check if the kth bit of a number is set or not
const turn_On_Kth_Bit = (n, k) => {
    // Check if the input is not a number
    if (typeof n != "number") {
        return 'It must be number!'; // Return an error message
    }
    // Return true if the kth bit is set, false otherwise
    return (n & (1 << (k - 1))) != 0;
}

// Initialize variables n and k with values
let n = 33;
let k = 1;

// Display the binary representation of n
console.log(n + " in binary is " + n.toString(2));
console.log("k = " + k);

// Call the turn_On_Kth_Bit function to check if the kth bit is set
let result_n = turn_On_Kth_Bit(n, k);
console.log("Check kth bit is set or not in the said number! " + result_n);

// Update variable k with a new value
k = 2;

// Display the binary representation of n
console.log(n + " in binary is " + n.toString(2));
console.log("k = " + k);

// Call the turn_On_Kth_Bit function to check if the kth bit is set
result_n = turn_On_Kth_Bit(n, k);
console.log("Check kth bit is set or not in the said number! " + result_n);
