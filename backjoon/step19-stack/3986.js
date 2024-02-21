/*
    문제 : 좋은 단어 (https://www.acmicpc.net/problem/3986)
    난이도 : 실버 4
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3
ABAB
AABB
ABBA`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const n = +input();
let answer = 0;

for (let i = 0; i < n; i++) {
  const word = input();
  const stk = [];

  for (const char of word) {
    if (stk.length > 0 && stk[stk.length - 1] === char) {
      stk.pop();
    } else {
      stk.push(char);
    }
  }

  if (stk.length === 0) answer++;
}
console.log(answer);
