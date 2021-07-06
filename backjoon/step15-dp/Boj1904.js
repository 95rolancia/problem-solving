/*
    문제 : 01타일 (https://www.acmicpc.net/problem/1904)
    난이도 : 실버 3
*/
const fs = require("fs");
const stdin = (process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `5`).split(
  "\n"
);

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const memo = Array(N + 1).fill(0);
memo[1] = 1;
memo[2] = 2;

for (let i = 3; i < N + 1; i++) {
  memo[i] = (memo[i - 1] + memo[i - 2]) % 15746;
}

console.log(memo[N]);
