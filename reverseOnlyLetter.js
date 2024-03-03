// reverse string in unsorted manner

function reverseOnlyLetter(str) {
    let letters = [];
    let special = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-zA-z]/)) {
            letters.push(str[i])
        } else {
            special[i] = str[i]
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (special[i] == undefined) {
            special[i] = letters[letters.length - 1]
            letters.pop()
        }
    }
    let final = special.join("");
    return final
}


// console.log(reverseOnlyLetter('p-pn-mac=hwan!!'));
// console.log(reverseOnlyLetter('ab-cd'));
console.log(reverseOnlyLetter('st*ri'));