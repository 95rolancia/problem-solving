/*
    난이도 : 브론드 3
    키워드 : 배열
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5 4
1 2 3
3 4 4
1 4 1
2 2 2`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [M, N] = input().split(" ").map(Number);
const balls = Array(M).fill(0);
for (let a = 0; a < N; a++) {
  const [i, j, k] = input().split(" ").map(Number);
  for (let b = i; b <= j; b++) {
    balls[b - 1] = k;
  }
}

console.log(...balls);
