// Function to generate permutations of an array
const permutations = arr => {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;

    return arr.reduce(
        (acc, item, i) =>
            acc.concat(
                permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
                    item,
                    ...val,
                ])
            ),
        []
    );
};
console.log(permutations([1, 33, 5]));
console.log(permutations([1, 3, 5, 7]));
console.log(permutations([2, 4]));
