let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < arr.length; i++) {
    // console.log(i)
    if (arr[i].length > 1) {
      // console.log(arr.length)
      leftSum = leftSum + arr[i][i];
      rightSum = rightSum + arr[arr.length - 1 - i][i];
    }
  }

  return Math.abs(leftSum - rightSum);
}

console.log(diagonalDifference(arr));
