const jump_Search = (nums, value) => {
    const length = nums.length
    let step = Math.floor(Math.sqrt(length))
    let lower_Bound = 0
    while (nums[Math.min(step, length) - 1] < value) {
        lower_Bound = step
        step += lower_Bound
        if (lower_Bound >= length) {
            return -1
        }
    }
    const upper_Bound = Math.min(step, length)
    while (nums[lower_Bound] < value) {
        lower_Bound++
        if (lower_Bound === upper_Bound) {
            return -1
        }
    }
    if (nums[lower_Bound] === value) {
        return lower_Bound
    }
    return -1
}
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(jump_Search(nums, 3))
console.log(jump_Search(nums, 9))
console.log(jump_Search(nums, 1))
console.log(jump_Search(nums, 0))
