// Recursive JavaScript function to check if a number is even.
function is_even_recursion(number) {
  if (number < 0) {
    number = Math.abs(number);
  }

  if (number === 0) {
    return true;
  }

  if (number === 1) {
    return false;
  } else {
    number = number - 2;
    return is_even_recursion(number);
  }
}

console.log(is_even_recursion(234));
console.log(is_even_recursion(-45));
console.log(is_even_recursion(65));
