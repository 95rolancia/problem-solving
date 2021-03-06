/*
    문제 : 정수 삼각형 (https://www.acmicpc.net/problem/1932)
    난이도 : 실버 1
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const tri = Array.from({ length: N }, () => Array(N).fill(-1));
const dp = Array.from({ length: N }, () => Array(N).fill(-1));

for (let i = 0; i < N; i++) {
  let temp = input().split(" ").map(Number);
  for (let j = 0; j < i + 1; j++) {
    tri[i][j] = temp[j];
  }
}

dp[0][0] = tri[0][0];

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i + 1; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][j] + tri[i][j];
    } else if (j === i) {
      dp[i][j] = dp[i - 1][j - 1] + tri[i][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + tri[i][j];
    }
  }
}

console.log(Math.max(...dp[N - 1]));
