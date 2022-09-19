/*
    문제 : 파일 합치기(https://www.acmicpc.net/problem/11066)
    난이도 : 골드 3
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `1
4
40 30 30 50`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const INF = 1000000000;
const T = +input();

for (let tcCnt = 0; tcCnt < T; tcCnt++) {
  const K = +input();
  const files = input().split(' ').map(Number);
  files.unshift(0);
  const sum = Array(501).fill(0);
  for (let i = 1; i <= K; i++) {
    sum[i] = sum[i - 1] + files[i];
  }

  const dp = Array.from({ length: 5 }, () => new Array(5).fill(0));

  for (let i = 1; i < K; i++) {
    for (let j = 1; j + i <= K; j++) {
      dp[j][i + j] = INF;
      for (let mid = j; mid < i + j; mid++) {
        console.log(i, j, mid);
        dp[j][i + j] = Math.min(
          dp[j][i + j],
          dp[j][mid] + dp[mid + 1][i + j] + sum[i + j] - sum[j - 1]
        );
      }
    }
  }
  console.log(dp[1][K]);
}
