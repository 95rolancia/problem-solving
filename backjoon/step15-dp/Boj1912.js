/*
    문제 : 연속합 (https://www.acmicpc.net/problem/1912)
    난이도 : 실버 2
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `10
10 -4 3 1 5 6 -35 12 21 -1`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const arr = input().split(' ').map(Number);
const dp = Array(arr.length).fill(0);

dp[0] = arr[0];
for (let i = 1; i < N; i++) {
  dp[i] = arr[i];
  dp[i] = Math.max(dp[i - 1] + arr[i], dp[i]);
}

console.log(Math.max(...dp));
