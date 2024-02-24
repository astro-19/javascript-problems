function filterString(s) {
  const res = [s.charAt(0), s.charAt(1)];

  for (let i = 2; i < s.length; ++i) {
    if (
      s.charAt(i) !== s.charAt(i - 2) ||
      s.charAt(i + 1) !== s.charAt(i - 2)
    ) {
      res.push(s[i]);
    }
  }

  return res.join("");
}

console.log(filterString("heeeeeellooooo"));
