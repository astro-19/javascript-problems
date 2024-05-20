// Function to check if an array forms a factor chain
function test(nums) {
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] % nums[i] != 0) {
            return false;
        }
    }

    return true;
}

nums = [2, 4, 8, 16, 32];
console.log("Original array: ", nums);
console.log("Check the said array is a factor chain or not?");
console.log(test(nums));

nums = [2, 4, 16, 32, 64];
console.log("Original array: ", nums);
console.log("Check the said array is a factor chain or not?");
console.log(test(nums));

nums = [2, 4, 16, 32, 68];
console.log("Original array: ", nums);
console.log("Check the said array is a factor chain or not?");
console.log(test(nums));
