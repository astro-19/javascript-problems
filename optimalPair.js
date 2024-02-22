let arr = [1, 4, 3, 2];
function findOptimalPairs(arr) {
  arr.sort();
  let a;
  for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
    a = arr[i] + arr[j - 1];
  }
  return a;
}

console.log(findOptimalPairs(arr));
