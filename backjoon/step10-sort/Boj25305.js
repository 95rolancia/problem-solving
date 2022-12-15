/*
    문제 : 커트라인 (https://www.acmicpc.net/problem/25305)
    난이도 : 브론즈 2
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5 2
100 76 85 93 98`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, k] = input().split(" ").map(Number);
const scores = input().split(" ").map(Number);
// 오름차순 정렬
scores.sort((a, b) => a - b);
// 뒤에서 k번째
console.log(scores[N - k]);
