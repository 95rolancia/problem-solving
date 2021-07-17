/*
    문제 : 전깃줄 (https://www.acmicpc.net/problem/2565)
    난이도 : 실버 1
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `8
1 8
3 9
2 2
4 1
6 4
10 10
9 7
7 6`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const lines = [];

for (let i = 0; i < N; i++) {
  const [from, to] = input().split(' ').map(Number);
  lines.push([from, to]);
}

lines.sort((a, b) => a[0] - b[0]);

const dp = Array(N).fill(1);
for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (lines[i][1] > lines[j][1]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(N - Math.max(...dp));
