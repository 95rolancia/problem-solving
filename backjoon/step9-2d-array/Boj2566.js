/*
난이도 : 브론즈 3
문제 : 최댓값 (https://www.acmicpc.net/problem/2566)
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3 23 85 34 17 74 25 52 65
10 7 39 42 88 52 14 72 63
87 42 18 78 53 45 18 84 53
34 28 64 85 12 16 75 36 55
21 77 45 35 28 75 90 76 1
25 87 65 15 28 11 37 28 74
65 27 75 41 7 89 78 64 39
47 47 70 45 23 65 3 41 44
87 13 82 38 31 12 29 29 80`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const M = [];

for (let i = 0; i < 9; i++) {
  M.push(input().split(" ").map(Number));
}

let colIdx;
let rowIdx;
let answer = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (answer < M[i][j]) {
      answer = Math.max(M[i][j]);
      colIdx = j;
      rowIdx = i;
    }
  }
}

console.log(answer);
console.log(rowIdx + 1, colIdx + 1);
