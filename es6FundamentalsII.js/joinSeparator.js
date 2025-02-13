// Define a function 'join' that concatenates elements of an array 'arr' into a single string
// with specified 'separator' between elements and 'end' at the end of the string
const join = (arr, separator = ",", end = separator) =>
  arr.reduce(
    (acc, val, i) =>
      i === arr.length - 2
        ? acc + val + end
        : i === arr.length - 1
        ? acc + val
        : acc + val + separator,
    ""
  );

console.log(join(["pen", "pineapple", "apple", "pen"], ",", "&"));
console.log(join(["pen", "pineapple", "apple", "pen"], ","));
console.log(join(["pen", "pineapple", "apple", "pen"]));
