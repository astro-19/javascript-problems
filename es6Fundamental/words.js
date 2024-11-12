// Define the 'words' function to split a string into words using a specified pattern.
const words = (str, pattern = /[^a-zA-Z-]+/) => {
  return str.split(pattern).filter(Boolean);
};

console.log(words("I love javaScript!!"));
console.log(words("python, java, php"));
