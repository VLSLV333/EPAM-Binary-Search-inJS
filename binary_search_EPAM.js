// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const ask = (question) =>
//   new Promise((resolve) => rl.question(question, resolve));
 
// function binarySearch(arr, left, right, target) {
//   while (left <= right) {
//     const middle = Math.floor((left + right) / 2);
 
//     if (arr[middle] == target) {
//       return middle;
//     }
//     if (arr[middle] < target) {
//       left = middle + 1;
//     } else {
//       right = middle - 1;
//     }
//   }
 
//   return -1;
// }
 
// async function main() {
//   const libraryNums = [108, 123, 124, 235, 285, 379, 456, 476, 756, 998];
//   console.log("The list of the library card number are,", libraryNums);
 
//   const requiredNum = Number(await ask("Enter the library card number: "));
 
//   if (requiredNum > 0) {
//     const index = binarySearch(
//       libraryNums,
//       0,
//       libraryNums.length - 1,
//       requiredNum
//     );
 
//     if (index == -1) {
//       console.log("The reader is not registered in the library.");
//     } else {
//       console.log(
//         `The reader, ${requiredNum}, is registered in the library and took book(s).`
//       );
//     }
//   }
 
//   rl.close();
// }
 
// main();


////                    THe result of the code

// The list of the library card number are, [ 108, 123, 124, 235, 285, 379, 456, 476, 756, 998 ]
// Enter the library card number: 756
// The reader, 756, is registered in the library and took book(s).