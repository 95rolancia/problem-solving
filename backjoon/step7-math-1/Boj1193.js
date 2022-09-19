/*
    Backjoon 1193번 
    문제 : 분수찾기 (https://www.acmicpc.net/problem/1193)
    난이도 : 브론즈 2
*/
const fs = require("fs");
const stdin = (process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `6`).split(
  "\n"
);

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());

let start = 1;
let level = 2;
while (true) {
  // N = 1일 때, 바로 break를 걸어주기 위해 맨 위
  if (start >= N) break;
  start += level++;
  console.log(start, level);
}

console.log(start, level);

let newLevel = level - 1;
let newStart = start - newLevel + 1;

if (newLevel % 2 !== 0) {
  let front = newLevel - (N - newStart);
  let back = newLevel + 1 - front;
  console.log(front + "/" + back);
} else {
  let front = newLevel - (N - newStart);
  let back = newLevel + 1 - front;
  console.log(back + "/" + front);
}
