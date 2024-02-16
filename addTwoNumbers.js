let l1 = [0]
let l2 = [0]

function addTwoNumbers(l1, l2) {
    let index = []
    let index1= []
    let str
    let str1
    for (let i = 0; i < l1.length; i++) {
        index.unshift(l1[i])
    }
    for (let i = 0; i < l2.length; i++) {
        index1.unshift(l2[i])
    }
    str = index.join('');
    str1 = index1.join('');
    let result = parseInt(str) + parseInt(str1)
    let result1 = result.toString().split('')
    let result2 = []
    for (let i = 0; i < result1.length; i++) {
        result2.unshift(parseInt(result1[i]))
    }
    return result2
}

console.time()
console.log(addTwoNumbers(l1, l2))
console.timeEnd()