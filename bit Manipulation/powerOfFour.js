// Define a function to check if a number is a power of four
const Power_of_four = (n) => {
    // Check if the input is not a number
    if (typeof n != "number") {
        return 'It must be number!' // Return an error message
    }
    // Check if the number is not zero, is a power of two, and has only one bit set in even position
    return n != 0 && (n & (n - 1)) == 0 && (n & 0xAAAAAAAA) == 0;
}
console.log(Power_of_four(256)) // Test the function with the number 256
console.log(Power_of_four(4)) // Test the function with the number 4
console.log(Power_of_four(2)) // Test the function with the number 2
console.log(Power_of_four("16")) // Test the function with the string "16"
