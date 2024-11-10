// Define the 'zipObject' function to create an object from arrays of properties and values.
const zipObject = (props, values) =>
  props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {});

console.log(zipObject(["a", "b", "c"], [1, 2]));
console.log(zipObject(["a", "b"], [1, 2, 3]));
