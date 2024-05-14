// Function to create an object indexed by a specified key
const indexOn = (arr, key) => {
    return arr.reduce((obj, v) => {
        const { [key]: id, ...data } = v;
        obj[id] = data;
        return obj;
    }, {});

}
console.log(indexOn([
    { id: 10, name: 'apple' },
    { id: 20, name: 'orange' }
], x => x.id));
