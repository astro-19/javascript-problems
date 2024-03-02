function calPoints(ops) {
    const bucket = [];

    for (const op of ops) {
        if (op === "+") {
            const score1 = bucket[bucket.length - 1];
            const score2 = bucket[bucket.length - 2];
            bucket.push(score1 + score2);
        } else if (op === "D") {
            const lastScore = bucket[bucket.length - 1];
            bucket.push(2 * lastScore);
        } else if (op === "C") {
            bucket.pop();
        } else {
            bucket.push(parseInt(op));
        }
    }

    return bucket.reduce((sum, score) => sum + score);
}

const ops1 = ["5", "2", "C", "D", "+"];
const ops2 = ["5", "-2", "4", "C", "D", "9", "+", "+"];
const ops3 = ["1"];

console.log(calPoints(ops1));
console.log(calPoints(ops2));
console.log(calPoints(ops3));