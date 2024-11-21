// Define the 'unfold' function.
const unfold = (fn, seed) => {
  let result = [];

  let val = [null, seed];
  while ((val = fn(val[1]))) {
    result.push(val[0]);
  }
  return result;
};

const f = (n) => (n > 50 ? false : [-n, n + 10]);

console.log(unfold(f, 10));
