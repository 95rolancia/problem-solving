/*
난이도 : 브론즈 5
문제 : 행렬 덧셈 (https://www.acmicpc.net/problem/2738)
*/
// 2022-12-13 풀이

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3 3
1 1 1
2 2 2
0 1 0
3 3 3
4 4 4
5 5 100`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input().split(" ").map(Number);
const A = [];
const B = [];

for (let i = 0; i < N; i++) {
  A.push(input().split(" ").map(Number));
}

for (let i = 0; i < N; i++) {
  B.push(input().split(" ").map(Number));
}

const answer = A.map((row, i) => row.map((v, j) => v + B[i][j]));

answer.forEach((row) => {
  console.log(row.join(" "));
});
