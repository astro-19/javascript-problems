// Define a function to find the next power of two greater than the given number
const next_Power_Of_Two = (num) => {
    // Check if the input is not a number
    if (typeof num != "number") {
        return 'It must be number!' // Return an error message
    }

    // Check if the number is already a power of two
    if (num > 0 && (num & (num - 1)) === 0)
        return num // Return the number itself if it is a power of two

    let result = 1 // Initialize the result as 1, which is the smallest power of two

    // Loop until the number becomes 0
    while (num > 0) {
        result = result << 1 // Multiply the result by 2 by left shifting the bits
        num = num >> 1 // Divide the number by 2 by right shifting the bits
    }
    return result // Return the next power of two
}
console.log(next_Power_Of_Two(1)) // Test the function with the number 1
console.log(next_Power_Of_Two(4)) // Test the function with the number 4
console.log(next_Power_Of_Two(9)) // Test the function with the number 9
console.log(next_Power_Of_Two("15")) // Test the function with the string "15"
