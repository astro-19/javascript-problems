// Define a function called `remove_non_ASCII` that removes non-ASCII characters from a string.
const remove_non_ASCII = str => str.replace(/[^\x20-\x7E]/g, '');

console.log(remove_non_ASCII('äÄçÇéÉêw3resouröceÖÐþúÚ'));
