/*
    문제 : RGB거리 (https://www.acmicpc.net/problem/1149)
    난이도 : 실버 1
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
26 40 83
49 60 57`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
let cost = [];
for (let i = 0; i < N; i++) {
  cost[i] = input().split(" ").map(Number);
}
console.log(cost);
// dp[i][1, 2, 3] => i번째에 R, G, B일 때 최소값
let dp = Array.from({ length: N + 1 }, () => Array(3).fill(0));

for (let i = 1; i < N + 1; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + cost[i - 1][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + cost[i - 1][1];
  dp[i][2] = Math.min(dp[i - 1][1], dp[i - 1][0]) + cost[i - 1][2];
}

console.log(dp[N]);
console.log(Math.min(dp[N][0], dp[N][1], dp[N][2]));
