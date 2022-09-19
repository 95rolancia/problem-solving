/*
    문제 : 다리 놓기 (https://www.acmicpc.net/problem/11051)
    난이도 : 실버 5
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
2 2
1 5
13 29`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const dp = Array.from({ length: 31 }, () => Array(31).fill(0));
for (let i = 0; i < N; i++) {
  const [N, K] = input().split(' ').map(Number);
  console.log(BC(K, N));
}

function BC(n, k) {
  if (dp[n][k] > 0) return dp[n][k];
  if (n === k || k === 0) return (dp[n][k] = 1);
  return (dp[n][k] = BC(n - 1, k - 1) + BC(n - 1, k));
}
