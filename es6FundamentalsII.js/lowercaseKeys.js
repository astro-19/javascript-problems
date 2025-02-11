// Define a function 'lowercaseKeys' that takes an object 'obj' as input
const lowercaseKeys = (obj) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});

const myObj = { Name: "Adam", sUrnAME: "Smith" };
const myObjLower = lowercaseKeys(myObj);
console.log(myObjLower);
