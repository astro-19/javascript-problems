// let str = 'New string, same results.'

function reverseStr(str) {
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr || false
}

function reverseWord(str) {
    let revStr = reverseStr(str);
    let revWord = [];
    let temp;
    for (let i = revStr.split(" ").length - 1; i >= 0; i--) {
        temp = revStr.split(" ")[i];
        if ([".", ","].indexOf(revStr.split(" ")[i][0]) > -1) {
            temp = revStr.split(" ")[i].slice(1) + revStr.split(" ")[i][0]
        }
        revWord.push(temp);
    }
    return revWord.join(" ") || false
}

console.log(reverseWord(str))


// function reverseStr(str) {
//     let revStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         revStr += str[i];
//     }
//     return str === revStr
// }

console.log(reverseStr("1211"))