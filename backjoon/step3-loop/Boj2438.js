/*
    Backjoon 2438번 
    문제 : 별 찍기 - 1 (https://www.acmicpc.net/problem/2438)
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
for (let i = 0; i < N; i++) {
  let result = "";
  for (let j = 0; j <= i; j++) {
    result += "*";
  }
  console.log(result);
}
