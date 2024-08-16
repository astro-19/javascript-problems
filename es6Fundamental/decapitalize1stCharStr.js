// Define a function called `decapitalize` that converts the first character of a string to lowercase and optionally converts the rest of the string to uppercase.
const decapitalize = ([first, ...rest], upperRest = false) =>
    first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''));
  
  console.log(decapitalize('W3resource'));  
  console.log(decapitalize('Red', true));  
  