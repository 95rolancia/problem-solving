/*
    문제 : 파일 합치기(https://www.acmicpc.net/problem/11066)
    난이도 : 골드 3
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2
4
40 30 30 50
15
1 21 3 4 5 35 5 4 3 5 98 21 14 17 32`
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

  const dp = Array.from({ length: 501 }, () => new Array(501).fill(0));

  for (let i = 1; i <= K; i++) {
    for (let j = 1; j <= K - i; j++) {
      dp[j][i + j] = INF;
      for (let k = j; k < i + j; k++) {
        dp[j][i + j] = Math.min(
          dp[j][i + j],
          dp[j][k] + dp[k + 1][i + j] + sum[i + j] - sum[j - 1]
        );
      }
    }
  }
  console.log(dp[1][K]);
}
