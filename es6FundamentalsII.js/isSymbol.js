// Define a function 'isSymbol' that checks if the type of value 'val' is 'symbol'
const isSymbol = (val) => typeof val === "symbol";

console.log(isSymbol(Symbol("x")));
console.log(isSymbol(Symbol(1)));
console.log(isSymbol(Symbol(")")));
