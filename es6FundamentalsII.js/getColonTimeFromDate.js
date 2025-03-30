// Define a function 'getColonTimeFromDate' that extracts the time portion in HH:MM:SS format from a Date object
const getColonTimeFromDate = (date) => date.toTimeString().slice(0, 8);

console.log(getColonTimeFromDate(new Date()));
