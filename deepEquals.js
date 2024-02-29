function deepEquals(valueOne, valueTwo) {

    if (typeof valueOne !== "object" && typeof valueTwo !== "object") {
        const isValueOneNaN = isNaN(valueOne) && typeof valueOne === "number";
        const isValueTwoNaN = isNaN(valueTwo) && typeof valueTwo === "number";

        if (isValueOneNaN && isValueTwoNaN) return true;

        return valueOne === valueTwo
    }

    if (typeof valueOne !== typeof valueTwo) return false;

    if (valueOne === null && valueTwo === null) return true;
    if (valueOne === null || valueTwo === null) return false;
    if (valueOne === valueTwo) return true;

    if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
        if (valueOne.length !== valueTwo.length) return false;
        for (let i = 0; i < valueOne.length; i++) {
            if (!deepEquals(valueOne[i], valueTwo[i])) return false
        }
        return true;
    }

    if (Array.isArray(valueOne) || Array.isArray(valueTwo)) return false

    const valueOneEntries = Object.keys(valueOne);
    const valueTwoEntries = Object.keys(valueTwo);

    if (valueOneEntries.length !== valueTwoEntries.length) return false
    if (!deepEquals(valueOneEntries, valueTwoEntries)) return false

    for (let i = 0; i < valueOneEntries.length; i++) {
        const key = valueOneEntries[i];
        const valueOneValue = valueOne[key]
        const valueTwoValue = valueTwo[key]
        if (!deepEquals(valueOneValue, valueTwoValue)) return false
    }

    return true
}


// console.log(deepEquals([[1,2,3],[4,5,6],[7,8,9]], [[1,2,3],[4,5,6],[7,"8",9]]))

// console.log(deepEquals([[1],[3]], [[1],[2]]))
// console.log(deepEquals(null, undefined))

console.log(deepEquals({ a: 1, obj: { b: 3 } }, { a: 1, obj: { b: 2 } }))
