/*
난이도 : 실버 5
문제 : 색종이 (https://www.acmicpc.net/problem/2563)
*/
// 2022-12-13 풀이

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
1 3
3 5`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const paper = Array.from({ length: 16 }, () => Array(16).fill(0));
console.log(paper);

const N = parseInt(input());
for (let i = 0; i < N; i++) {
  const [x, y] = input().split(" ").map(Number);
  draw(x, y);
  console.log(x, y);
  console.table(paper);
}

console.log(getSize());

function getSize() {
  let result = 0;
  for (let i = 1; i <= 15; i++) {
    for (let j = 1; j <= 15; j++) {
      if (paper[i][j] > 0) result++;
    }
  }
  return result;
}

function draw(x, y) {
  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      paper[i][j]++;
    }
  }
}
