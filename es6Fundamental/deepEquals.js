// Define a function 'equals' that compares two values 'a' and 'b' for deep equality.
const equals = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date)
    return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== "object" && typeof b !== "object"))
    return a === b;
  if (
    a === null ||
    a === undefined ||
    b === null ||
    b === undefined ||
    a.prototype !== b.prototype
  )
    return false;
  let keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every((k) => equals(a[k], b[k]));
};

console.log(
  equals(
    { a: [2, { e: 3 }], b: [4], c: "foo" },
    { a: [2, { e: 3 }], b: [4], c: "foo" }
  )
);
