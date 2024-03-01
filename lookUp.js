let str = "()]]{}";



function checkForSameBracket(str) {
    let lookup = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    let current;

    let bucket = []


    for (let i = 0; i < str.length; i++) {
        let current = str[i]
        if (current == "(" || current == "[" || current == "{") {
            bucket.push(current)
        } else if (current == ")" || current == "]" || current == "}") {
            let lastBracket = bucket.pop()
            if (lookup[lastBracket] != current) {
                return false
            }
        }
    }
    return bucket.length == 0
}

console.log(checkForSameBracket(str));