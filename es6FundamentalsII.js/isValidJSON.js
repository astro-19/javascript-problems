// Define a function 'isValidJSON' that checks if a given string 'obj' is a valid JSON
const isValidJSON = (obj) => {
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
};

console.log(isValidJSON('{"name":"Adam","age":20}'));
console.log(isValidJSON('{"name":"Adam",age:"20"}'));
console.log(isValidJSON(null));
