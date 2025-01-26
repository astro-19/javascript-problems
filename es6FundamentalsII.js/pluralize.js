// Define a function 'pluralize' to handle singular and plural forms of words
const pluralize = (val, word, plural = word + "s") => {
  const _pluralize = (num, word, plural = word + "s") =>
    [1, -1].includes(Number(num)) ? word : plural;
  if (typeof val === "object")
    return (num, word) => _pluralize(num, word, val[word]);
  return _pluralize(val, word, plural);
};

pluralize(0, "apple");
pluralize(1, "apple");
pluralize(2, "apple");
pluralize(2, "person", "people");
const PLURALS = {
  person: "people",
  radius: "radii",
};

const autoPluralize = pluralize(PLURALS);
console.log(autoPluralize(2, "person"));
