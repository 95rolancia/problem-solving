/*
    문제 : 이항 계수 2 (https://www.acmicpc.net/problem/11051)
    난이도 : 실버 1
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `1000 500`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, K] = input().split(' ').map(Number);
const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));
console.log(BC(N, K));

function BC(n, k) {
  if (dp[n][k] > 0) return dp[n][k];
  if (n === k || k === 0) return (dp[n][k] = 1);
  return (dp[n][k] = (BC(n - 1, k - 1) + BC(n - 1, k)) % 10007);
}
