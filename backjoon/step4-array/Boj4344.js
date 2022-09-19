/*
    Backjoon 4344번 
    문제 : 평균은 넘겠지 (https://www.acmicpc.net/problem/4344)
    난이도 : 브론즈 1
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const T = parseInt(input());
for (let t = 0; t < T; t++) {
  const [N, ...arr] = input().split(" ").map(Number);
  const aver = arr.reduce((a, b) => a + b) / N;

  let cnt = arr.filter((score) => score > aver).length;
  let result = (cnt / N) * 100;

  console.log(result.toFixed(3) + "%");
}
