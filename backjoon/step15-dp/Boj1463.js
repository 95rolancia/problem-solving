/*
    문제 : 1로 만들기 (https://www.acmicpc.net/problem/1463)
    난이도 : 실버 3
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `10`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let X = +input();

let dp = Array(X + 1).fill(0);
dp[0] = 0;
dp[1] = 0;

for (let i = 2; i < X + 1; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[Math.floor(i / 2)] + 1, dp[i]);
  }
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[Math.floor(i / 3)] + 1, dp[i]);
  }
}

console.log(dp[X]);
