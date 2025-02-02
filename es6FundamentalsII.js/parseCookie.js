// Define a function 'parseCookie' that takes a string representing a cookie and parses it into an object
const parseCookie = (str) =>
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});

console.log(parseCookie("foo=bar; equation=E%3Dmc%5E2"));
