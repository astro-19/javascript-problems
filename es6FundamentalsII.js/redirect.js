// Define a function 'redirect' that redirects the browser to a specified URL
// If 'asLink' is true, it uses the current window's location to navigate to the URL
// If 'asLink' is false, it replaces the current window's location with the specified URL
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);

redirect("https://google.com");
