/*
    문제 : 정수 삼각형 (https://www.acmicpc.net/problem/1932)
    난이도 : 실버 1
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `6
10
20
15
25
10
20`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const steps = [];
for (let i = 0; i < N; i++) {
  steps.push(+input());
}

const dp = Array(N - 1).fill(-1);
dp[0] = steps[0];
dp[1] = steps[0] + steps[1];
dp[2] = Math.max(steps[0] + steps[2], steps[1] + steps[2]);
for (let i = 3; i < N; i++) {
  dp[i] = Math.max(dp[i - 3] + steps[i - 1], dp[i - 2]) + steps[i];
}

console.log(dp[N - 1]);
