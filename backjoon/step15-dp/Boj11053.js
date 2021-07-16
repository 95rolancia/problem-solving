/*
    문제 : 가장 긴 증가하는 부분 수열 (https://www.acmicpc.net/problem/11053)
    난이도 : 실버 2
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `6
10 20 10 30 20 50`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const arr = input().split(' ').map(Number);
const dp = Array(N).fill(1);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[j] + 1, dp[i]);
    }
  }
}

console.log(Math.max(...dp));
