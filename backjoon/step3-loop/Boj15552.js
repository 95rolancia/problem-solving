/*
    Backjoon 15552번 
    문제 : 빠른 A + B (https://www.acmicpc.net/problem/15552)
    난이도 : 브론즈 2
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
let result = "";

for (let tc = 1; tc <= T; tc++) {
  result +=
    input()
      .split(" ")
      .map(Number)
      .reduce((a, b) => a + b) + "\n";
}

console.log(result);
