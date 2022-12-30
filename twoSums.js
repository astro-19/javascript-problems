let a = [1, 2, 3, 4, 5, 6, 7]

function twoSum(nums, target) {
    let index = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                index.push([nums[i], nums[j]])
            }
        }
    }
    return index
}

let result = twoSum(a, 9)

console.log(result)