// Define a function 'elementContains' to check if a parent element contains a child element
const elementContains = (parent, child) =>
  parent !== child && parent.contains(child);

console.log(
  elementContains(
    document.querySelector("head"),
    document.querySelector("title")
  )
);
console.log(
  elementContains(
    document.querySelector("body"),
    document.querySelector("body")
  )
);
