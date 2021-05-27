/*
    Backjoon 2742번 
    문제 : 기찍 N (https://www.acmicpc.net/problem/2742)
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
for (let i = N; i > 0; i--) {
  result += i + "\n";
}

console.log(result);
