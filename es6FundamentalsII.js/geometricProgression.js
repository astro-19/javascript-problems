// Define a function 'geometricProgression' that generates a geometric progression sequence
const geometricProgression = (end, start = 1, step = 2) =>
  Array.from({
    length: Math.floor(Math.log(end / start) / Math.log(step)) + 1,
  }).map((v, i) => start * step ** i);

console.log(geometricProgression(256));
console.log(geometricProgression(256, 3));
console.log(geometricProgression(256, 1, 4));
