// Define the 'truthCheckCollection' function.
const truthCheckCollection = (collection, pre) =>
  collection.every((obj) => obj[pre]);

console.log(
  truthCheckCollection(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
    ],
    "sex"
  )
);
