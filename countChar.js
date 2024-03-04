// count a specific char
let a = "BTM 1st Stage, BTM 1st Stage, BTM 1st Stage, BTM 1st Stage, BTM 1st Stage, BTM 1st Stage, BTM 1st Stage, BTM 1st Stage"

function countAChar(a, charToFind) {
    let b = 0;
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] == charToFind) {
            b++
        }
    }
    return b || false
}

function countACharShort(a, charToFind) {
    return a.split(charToFind).length - 1 || false
}
console.log(countAChar(a, "1"))