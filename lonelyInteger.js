// function lonelyValue(a) {
//   if (a.length === 1) {
//     return a[0];
//   }

//   let counts = {};

//   for (let i = 0; i < a.length; i++) {
//     if (!counts[a[i]]) {
//       counts[a[i]] = 1;
//     } else {
//       counts[a[i]] += 1;
//     }
//   }
//   let unique = {};
//   for (let key in counts) {
//     if (counts[key] === 1) {
//       unique[key] = counts[key];
//     }
//   }
//   return unique;
// }


// let a = [1, 2, 3, 4, 3, 2, 1]
// let num = []
// for (let i = 0; i < a.length; i++) {
//   if (a.indexOf(a[i]) === a.lastIndexOf(a[i])) {
//     num.push(a[i]);
//   }
// }

let num = []
for (var i = 0; i < 5; i++); {
  num.push(i + 1)
}

console.log(num);
// console.log(lonelyValue([1, 2, 3, 4, 3, 2, 1]));
