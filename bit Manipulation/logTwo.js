// Define a function to calculate the logarithm base 2 of a number
const log_Two = (n) => {
    // Check if the input is not a number
    if (typeof n != "number") {
        return 'It must be number!' // Return an error message
    }
    let result = 0; // Initialize the result variable to 0
    // Loop to find the logarithm base 2 of the number
    while (n >> 1) {
        n >>= 1; // Right shift the number by 1 bit
        result++; // Increment the result counter
    }
    return result; // Return the logarithm base 2 of the number
}
console.log(log_Two(1)) // Test the function with the number 1
console.log(log_Two(2)) // Test the function with the number 2
console.log(log_Two(4)) // Test the function with the number 4
console.log(log_Two(32)) // Test the function with the number 32
