/*
    Backjoon 1065번 
    문제 : 한수 (https://www.acmicpc.net/problem/1065)
    난이도 : 실버 4
*/

const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `210`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());

let result = 0;
for (let i = 1; i <= N; i++) {
  let isHansu = true;
  let temp = i.toString().split("");
  let diff = temp[1] - temp[0];
  for (let j = 1; j < temp.length - 1; j++) {
    if (temp[j + 1] - temp[j] !== diff) {
      isHansu = false;
      break;
    }
  }
  if (isHansu) result++;
}

console.log(result);
