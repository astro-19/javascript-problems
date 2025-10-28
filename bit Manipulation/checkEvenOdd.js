// Define a function to check whether a number is even or odd
const check_even_odd = (n) => {
    // Check if the input is not a number
    if (typeof n != "number") {
        return 'Parameter value must be number!' // Return an error message
    }
    // Check if the number is even
    if ((n ^ 1) == (n + 1))//even
        return n + ' is an even number.' // Return a message indicating that the number is even
    else //odd
        return n + ' is an odd number.' // Return a message indicating that the number is odd
}
console.log(check_even_odd(1)) // Test the function with the number 1
console.log(check_even_odd(4)) // Test the function with the number 4
console.log(check_even_odd(9)) // Test the function with the number 9
console.log(check_even_odd("15")) // Test the function with the string "15"
