// Define a function to find the non-repeated number in an array of integers
const non_repeated_num = (nums) => {
    let r = 0; // Initialize a variable to store the result
    // Iterate through the array elements
    for (let i = 0; i <= nums.length; i++) {
        r = r ^ nums[i]; // Use bitwise XOR operation to find the non-repeated number
    }
    return r; // Return the non-repeated number
}

// Define an array of integers
nums = [1, 2, 8, 3, 1, 2, 3, 8, 6, 6, 7];

// Call the non_repeated_num function to find the non-repeated number in the array
console.log(non_repeated_num(nums));
