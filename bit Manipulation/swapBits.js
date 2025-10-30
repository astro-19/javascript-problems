// Define a function to swap bits at given positions in a number
const swap_bits = (n, pos1, pos2) => {
    // Check if the input is not a number
    if (typeof n != "number") {
        return 'It must be number!' // Return an error message
    }
    // Check if the XOR of the bits at the given positions is 1
    if ((((n & (1 << pos1)) >> pos1) ^ ((n & (1 << pos2)) >> pos2)) == 1) {
        n ^= (1 << pos1); // Swap the bits at position pos1
        n ^= (1 << pos2); // Swap the bits at position pos2
    }
    return n; // Return the number after swapping the bits
}
console.log(swap_bits(245, 1, 4)) // Test the function with the number 245, swapping bits at positions 1 and 4
console.log(swap_bits(137, 6, 7)) // Test the function with the number 137, swapping bits at positions 6 and 7
console.log(swap_bits("16")) // Test the function with the string "16"
