/*
    Backjoon 2741번 
    문제 : N 찍기 (https://www.acmicpc.net/problem/2741)
    난이도 : 브론즈 3
*/

const fs = require("fs");
const stdin = (process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `5`).split(
  "\n"
);

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
let result = "";
for (let i = 1; i <= N; i++) {
  result += i + "\n";
}

console.log(result);
