let a = ["words", "hello", "world"]

// let randomWord = a[Math.floor(Math.random() * a.length)]
let randomWords = []
let RandomWordCount = {}
function randomWord(word) {
    let randomWord;
    randomWord = word[Math.floor(Math.random() * word.length)];
    if (randomWords.length === 0) {
        randomWords.push(randomWord)
    }
    for (let i of randomWords) {
        if (i !== randomWord) {
            randomWords.push[randomWord]
            RandomWordCount.randomWord += 1
        }
    }

    return [randomWords, RandomWordCount]
}
console.log(randomWord(a))