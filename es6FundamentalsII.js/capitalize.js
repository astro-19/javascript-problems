// Define a function 'capitalize' to capitalize the first letter of a string
// and optionally lowercase the rest of the string
const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join("").toLowerCase() : rest.join(""));

console.log(capitalize("fooBar"));
console.log(capitalize("fooBar", true));
