function interpolation_Search(nums, value) {
    const length = nums.length - 1
    let low = 0
    let high = length
    let position = -1
    let delta = -1
    // Due to the sorting of the array, the value must be between low and high
    while (low <= high && value >= nums[low] && value <= nums[high]) {
        delta = (value - nums[low]) / (nums[high] - nums[low])
        position = low + Math.floor((high - low) * delta)
        // The position of the found target should be returned
        if (nums[position] === value) {
            return position
        }
        // It will appear in the upper part of the array if the value is larger
        if (nums[position] < value) {
            low = position + 1
            // It will appear in the smaller part of the array if the value is lower
        } else {
            high = position - 1
        }
    }
    return -1
}
const nums = [1, 7, 13, 14, 15, 26, 37, 48, 99, 110]
console.log(interpolation_Search(nums, 13))
console.log(interpolation_Search(nums, 26))
console.log(interpolation_Search(nums, 0))
console.log(interpolation_Search(nums, 99))
