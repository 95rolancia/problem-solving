/*
    Backjoon 2292번 
    문제 : 벌집 (https://www.acmicpc.net/problem/2292)
    난이도 : 브론즈 2
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `1000000000`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
// N = 1일 때 처리해줘야 함
if (N === 1) {
  console.log(1);
  process.exit();
}

let answer = 1;
let start = 2;
while (start <= N) {
  start = start + 6 * answer++;
}

console.log(answer);
