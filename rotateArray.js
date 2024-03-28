

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let rot = 3

function rotate(arr, a) {
    for (let i = 0; i < rot; i++) {
        let ele = arr.pop()
        arr.unshift(ele)
    }
    return arr;
}


console.log(rotate(arr, rot))