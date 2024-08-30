// Define a function 'pad' that takes three parameters: 'str' (a string), 'length' (the desired length of the padded string), and 'char' (the padding character, default is a space).
const pad = (str, length, char = " ") =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);

console.log(pad("cat", 8));
console.log(pad(String(42), 6, "0"));
console.log(pad("foobar", 3));
