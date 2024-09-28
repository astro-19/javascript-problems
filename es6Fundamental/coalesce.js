// Define a function 'coalesce' to return the first non-null and non-undefined value from the provided arguments.
const coalesce = (...args) => args.find((_) => ![undefined, null].includes(_));

console.log(coalesce(null, undefined, "", NaN, "abcd"));
