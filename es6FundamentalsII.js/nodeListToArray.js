// Define a function 'nodeListToArray' that takes a DOM NodeList 'nodeList'
const nodeListToArray = (nodeList) => Array.prototype.slice.call(nodeList);
console.log(nodeListToArray(document.childNodes));
