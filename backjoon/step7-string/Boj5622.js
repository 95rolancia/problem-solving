/*
    Backjoon 5622번 
    문제 : 다이얼 (https://www.acmicpc.net/problem/5622)
    난이도 : 브론즈 2
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `UNUCIC`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

// const timeDic = {
//   A: 3,
//   B: 3,
//   C: 3,
//   D: 4,
//   E: 4,
//   F: 4,
//   G: 5,
//   H: 5,
//   I: 5,
//   J: 6,
//   K: 6,
//   L: 6,
//   M: 7,
//   N: 7,
//   O: 7,
//   P: 8,
//   Q: 8,
//   R: 8,
//   S: 8,
//   T: 9,
//   U: 9,
//   V: 9,
//   W: 10,
//   X: 10,
//   Y: 10,
//   Z: 10,
// };

// const word = input();
// let time = 0;
// word.split("").forEach((a) => {
//   time += timeDic[a];
// });

// console.log(time);

const dial = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
let sec = 0;

const word = input();
word.split("").forEach((a) => {
  for (let i = 0; i < dial.length; i++) {
    if (dial[i].includes(a)) {
      sec += i + 3;
      break;
    }
  }
});

console.log(sec);
