/*
    Backjoon 8393번 
    문제 : 합 (https://www.acmicpc.net/problem/8393)
    난이도 : 브론즈 3
*/

const fs = require("fs");
const stdin = (process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `3`).split(
  "\n"
);

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());

console.log((N * (N + 1)) / 2);
