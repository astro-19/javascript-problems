// Define a function 'stripHTMLTags' to remove HTML tags from a string
const stripHTMLTags = (str) => str.replace(/<[^>]*>/g, "");

console.log(stripHTMLTags("<p><em>lorem</em> <strong>ipsum</strong></p>"));
