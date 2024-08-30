// Define a function 'orderBy' that takes three parameters: 'arr' (an array), 'props' (an array of property names), and 'orders' (an optional array of sort orders).
const orderBy = (arr, props, orders) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] =
          orders && orders[i] === "desc"
            ? [b[prop], a[prop]]
            : [a[prop], b[prop]];

        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );

const users = [
  { name: "fred", age: 48 },
  { name: "barney", age: 36 },
  { name: "fred", age: 40 },
];

console.log(orderBy(users, ["name", "age"], ["asc", "desc"]));
console.log(orderBy(users, ["name", "age"]));
