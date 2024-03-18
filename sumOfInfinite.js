function sumOfFirstM(A, N, M) {
    let sum = 0;
    for (let i = 0; i < M; i++) {
        sum = sum + A[i % N];
    }
    return sum;
}

let arr = [1, 2, 3, 4];
let M = 5;
let N = arr.length;
console.log(sumOfFirstM(arr, N, M));