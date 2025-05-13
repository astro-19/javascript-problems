// Define a function 'bottomVisible' to check if the bottom of the page is visible
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight ||
    document.documentElement.clientHeight);

console.log(bottomVisible());
