// Define the function 'longestItem' to find the longest item among the provided values.
const longestItem = (...vals) =>
  [...vals].sort((a, b) => b.length - a.length)[0];

console.log(longestItem("this", "is", "a", "testcase"));
console.log(longestItem(...["a", "ab", "abc"]));
console.log(longestItem(...["a", "ab", "abc"], "abcd"));
console.log(longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]));
console.log(longestItem([1, 2, 3], "foobar"));
