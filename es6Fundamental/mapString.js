// Define the function 'mapString' to map each character of a string to a new character using a given function.
const mapString = (str, fn) =>
  str
    .split("")
    .map((c, i) => fn(c, i, str))
    .join("");

console.log(mapString("Javascript exercises", (c) => c.toUpperCase()));
