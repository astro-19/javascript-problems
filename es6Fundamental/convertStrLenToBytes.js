// Define a function called `byte_Size` that calculates the byte size of a string.
const byte_Size = str => new Blob([str]).size;

console.log(byte_Size('123456'));         
console.log(byte_Size('Hello World'));    
console.log(byte_Size('Ã¢'));    
