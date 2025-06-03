// Function to generate letter combinations for a given digit string
const letterCombinations = (digits) => {
  const length = digits?.length;
  const result = [];
  if (!length) {
    return result;
  }

  const digitMap = {
    1: "abc",
    2: "def",
    3: "ghi",
    4: "jkl",
    5: "mno",
    6: "pqr",
    7: "stu",
    8: "vwx",
    9: "yz",
  };

  const generateCombinations = (index, combination) => {
    let letter;
    let letterIndex;

    if (index >= length) {
      result.push(combination);
      return;
    }

    const digit = digitMap[digits[index]];

    letterIndex = 0;
    while ((letter = digit[letterIndex++])) {
      generateCombinations(index + 1, combination + letter);
    }
  };

  generateCombinations(0, "");

  return result;
};

console.log(letterCombinations("12"));
console.log(letterCombinations("9"));
