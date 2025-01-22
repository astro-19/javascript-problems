// Define a function 'pullBy' that modifies the input array by removing elements based on specified criteria
// It takes a variable number of arguments:
// 1. 'arr': The array from which elements will be pulled
// 2. '...args': Additional arguments which can be either values or arrays of values to be removed
// If the last argument is a function, it will be used to extract the comparison value from elements
const pullBy = (arr, ...args) => {
  const length = args.length;
  let fn = length > 1 ? args[length - 1] : undefined;
  fn = typeof fn == "function" ? (args.pop(), fn) : undefined;
  let argState = (Array.isArray(args[0]) ? args[0] : args).map((val) =>
    fn(val)
  );
  let pulled = arr.filter((v, i) => !argState.includes(fn(v)));
  arr.length = 0;
  pulled.forEach((v) => arr.push(v));
};

var myArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];

pullBy(myArray, [{ x: 1 }, { x: 3 }], (o) => o.x);

console.log(myArray);
