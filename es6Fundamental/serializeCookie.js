// Define the serializeCookie function
const serializeCookie = (name, val) =>
  `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

console.log(serializeCookie("foo", "bar"));
