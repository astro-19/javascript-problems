// Define the 'toCurrency' function.
const toCurrency = (n, curr, languageFormat = undefined) =>
  Intl.NumberFormat(languageFormat, {
    style: "currency",
    currency: curr,
  }).format(n);

console.log(toCurrency(123456.789, "EUR"));
console.log(toCurrency(123456.789, "USD", "en-us"));
console.log(toCurrency(123456.789, "USD", "fa"));
console.log(toCurrency(322342436423.2435, "JPY"));
console.log(toCurrency(322342436423.2435, "JPY", "fi"));
