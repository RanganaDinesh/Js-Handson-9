// let input = "abcadeecfb";
// let output = "";

// for (let i = 0; i < input.length; i++) {
//   if (output.indexOf(input[i]) === -1) {
//     output += input[i];
//   }
// }
// // console.log(output);
let input = "abcadeecfb";
let charCount = new Map();
for (let i = 0; i < input.length; i++) {
    if (charCount.has(input[i])) {
      charCount.set(input[i], charCount.get(input[i]) + 1);
    } else {
      charCount.set(input[i], 1);
    }
  }
  
  for (let [key, value] of charCount) {
    console.log(key + "=" + value);
  }