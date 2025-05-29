// Extend Array prototype to include a merge sort function
Array.prototype.merge_Sort = function () {
  if (this.length <= 1) {
    return this;
  }

  var half = parseInt(this.length / 2);

  var left = this.slice(0, half).merge_Sort();
  var right = this.slice(half, this.length).merge_Sort();

  var merge = function (left, right) {
    var mergedArray = [];

    while (left.length > 0 && right.length > 0) {
      mergedArray.push(left[0] <= right[0] ? left.shift() : right.shift());
    }

    return mergedArray.concat(left).concat(right);
  };

  return merge(left, right);
};

var inputArray = [34, 7, 23, 32, 5, 62];
var sortedArray = inputArray.merge_Sort();

console.log(sortedArray);
