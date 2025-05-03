// Define a function 'RGBToHex' to convert RGB values to hexadecimal format
const RGBToHex = (r, g, b) =>
  ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");

console.log(RGBToHex(255, 165, 1));
console.log(RGBToHex(255, 255, 1));
