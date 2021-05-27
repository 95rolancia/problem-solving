/*
    Backjoon 10950번 
    문제 : A + B - 3 (https://www.acmicpc.net/problem/10950)
    난이도 : 브론즈 3
*/

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
1 1
2 3
3 4
9 8
5 2`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const T = parseInt(input());

for (let tc = 1; tc <= T; tc++) {
  const [a, b] = input().split(" ").map(Number);
  console.log(a + b);
}
