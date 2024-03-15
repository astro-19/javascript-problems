

const arr = [1, 3, 6, 5, 4];
let or = 1
const rotatedArr = arr.map((e, i) => arr[arr.length - i - or])
console.log(rotatedArr)