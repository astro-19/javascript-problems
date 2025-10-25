// Define a function to count the number of set bits (1s) in the binary representation of a given integer
function Binary_Count_SetBits(a) {
    // Check whether the input is an integer
    if (!Number.isInteger(a)) {
        return ('Parameter value is not an Integer!') // Return an error message if the input is not an integer
    }
    // Convert the integer to its binary representation, split it by '0', and count the number of substrings
    return a.toString(2).split('0').length - 1
}
console.log(Binary_Count_SetBits(45)) // Test the function with the integer 45
console.log(Binary_Count_SetBits(17)) // Test the function with the integer 17
console.log(Binary_Count_SetBits("15")) // Test the function with the string "15"
