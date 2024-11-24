// Define the 'unescapeHTML' function.
const unescapeHTML = (str) =>
  str.replace(
    /&|<|>|'|"/g,
    (tag) =>
      ({
        "&": "&",
        "<": "<",
        ">": ">",
        "'": "'",
        '"': '"',
      }[tag] || tag)
  );

console.log(unescapeHTML('<a href="#">Me & you</a>'));
