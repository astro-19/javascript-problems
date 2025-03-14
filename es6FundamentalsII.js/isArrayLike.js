// Define a function 'isArrayLike' that checks if the input value is array-like
const isArrayLike = (val) => {
  try {
    return [...val], true; // Try to spread the input value into an array and return true
  } catch (e) {
    return false;
  }
};

console.log(isArrayLike(document.querySelectorAll(".className")));
console.log(isArrayLike("abc"));
console.log(isArrayLike(null));
