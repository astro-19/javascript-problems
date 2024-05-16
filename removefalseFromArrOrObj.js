// Function to compact an object by removing falsy values (null, false, 0, '', undefined)
const compactObject = val => {
    const data = Array.isArray(val) ? val.filter(Boolean) : val;

    return Object.keys(data).reduce(
        (acc, key) => {
            const value = data[key];

            if (Boolean(value))
                acc[key] = typeof value === 'object' ? compactObject(value) : value;

            return acc;
        },
        Array.isArray(val) ? [] : {}
    );
};

const obj = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
    h: [null, false, '', true, 1, 'a'],
    i: { j: 0, k: false, l: 'a' }
};

console.log(compactObject(obj));
