function lonelyValue(a) {
  if (a.length === 1) {
    return a[0];
  }

  let counts = {};

  for (let i = 0; i < a.length; i++) {
    if (!counts[a[i]]) {
      counts[a[i]] = 1;
    } else {
      counts[a[i]] += 1;
    }
  }
  let unique = {};
  for (let key in counts) {
    if (counts[key] === 1) {
      unique[key] = counts[key];
    }
  }
  return unique;
}

console.log(lonelyValue([1, 2, 3, 4, 3, 2, 1]));
