/*
    문제 : 포도주 시식 (https://www.acmicpc.net/problem/2156)
    난이도 : 실버 1
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `6
6
10
13
9
8
1`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const steps = [];
for (let i = 0; i < N; i++) {
  steps.push(+input());
}

const dp = Array(N + 1).fill(0);
dp[1] = steps[0];
dp[2] = steps[0] + steps[1];
for (let i = 3; i <= N; i++) {
  dp[i] = Math.max(dp[i - 3] + steps[i - 2], dp[i - 2]) + steps[i - 1];
  dp[i] = Math.max(dp[i - 1], dp[i]);
}

console.log(dp[N]);
