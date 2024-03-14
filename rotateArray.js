

const arr = [1, 3, 6, 5, 4];
const rotatedArr = arr.map((e, i) => arr[arr.length - i - 1])
console.log(rotatedArr)