/*
    문제 : 쉬운 계단 수 (https://www.acmicpc.net/problem/10844)
    난이도 : 실버 1
*/
const fs = require('fs');
const stdin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `2`).split(
  '\n'
);

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const mod = 1000000000;
const dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));
for (let i = 1; i <= 9; i++) {
  dp[1][i] = 1;
}
for (let i = 2; i <= N; i++) {
  for (let j = 0; j <= 9; j++) {
    if (j - 1 >= 0) {
      dp[i][j] += dp[i - 1][j - 1];
    }
    if (j + 1 <= 9) {
      dp[i][j] += dp[i - 1][j + 1];
    }
    dp[i][j] %= mod;
  }
}
console.log(dp);
console.log(dp[N].reduce((a, b) => a + b) % mod);

console.log(5 % 2);
