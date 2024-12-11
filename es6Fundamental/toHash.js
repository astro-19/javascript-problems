// Define the 'toHash' function.
const toHash = (object, key) =>
  Array.prototype.reduce.call(
    object,
    (acc, data, index) => ((acc[!key ? index : data[key]] = data), acc),
    {}
  );
toHash([4, 3, 2, 1]);
toHash([{ a: "label" }], "a");
let users = [
  { id: 1, first: "Jon" },
  { id: 2, first: "Joe" },
  { id: 3, first: "Moe" },
];
let managers = [{ manager: 1, employees: [2, 3] }];
managers.forEach(
  (manager) =>
    (manager.employees = manager.employees.map(function (id) {
      return this[id];
    }, toHash(users, "id")))
);

console.log(managers);
