// Define a function 'fromCamelCase' that converts a camelCase string to snake_case by inserting a separator between words
const fromCamelCase = (str, separator = "_") =>
  str
    .replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2")
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + separator + "$2")
    .toLowerCase();

console.log(fromCamelCase("someDatabaseFieldName", " "));
console.log(fromCamelCase("someLabelThatNeedsToBeCamelized", "-"));
console.log(fromCamelCase("someJavascriptProperty", "_"));
