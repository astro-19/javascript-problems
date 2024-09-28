// Define a function 'cloneRegExp' to create a clone of a regular expression.
const cloneRegExp = (regExp) => new RegExp(regExp.source, regExp.flags);

const regExp = /lorem ipsum/gi;
console.log(regExp);

const regExp2 = cloneRegExp(regExp);
console.log(regExp2);
