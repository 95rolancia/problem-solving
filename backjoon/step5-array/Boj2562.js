/*
    Backjoon 2562번 
    문제 : 최댓값 (https://www.acmicpc.net/problem/2562)
    난이도 : 브론즈 2
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3
29
38
12
57
74
40
85
61`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let result = {
  max: -1,
  index: -1,
};

for (let i = 0; i < 9; i++) {
  const number = parseInt(input());
  if (number > result.max) {
    result.max = number;
    result.index = i + 1;
  }
}

console.log(result.max);
console.log(result.index);
