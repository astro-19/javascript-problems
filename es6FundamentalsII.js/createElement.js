//#Source https://bit.ly/2neWfJ2
// Define a function 'createElement' that creates a DOM element from the provided HTML string
const createElement = (str) => {
  const el = document.createElement("div");
  el.innerHTML = str;
  return el.firstElementChild;
};

const el = createElement(
  `<div class="container">
    <p>Hello!</p>
  </div>`
);

console.log(el.className);
