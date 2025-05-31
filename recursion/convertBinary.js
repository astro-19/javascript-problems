// Recursive function to convert a binary number to decimal
const binaryToDecimal = (binaryString, index = 0) => {
  if (index === binaryString.length) {
    return 0;
  }

  const currentDigit = parseInt(binaryString[index]);

  const restDecimal = binaryToDecimal(binaryString, index + 1);
  const currentDecimal =
    currentDigit * Math.pow(2, binaryString.length - index - 1);

  return currentDecimal + restDecimal;
};

console.log(binaryToDecimal("1"));
console.log(binaryToDecimal("0"));
console.log(binaryToDecimal("10"));
console.log(binaryToDecimal("101"));
