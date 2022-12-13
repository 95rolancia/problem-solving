/*
    Backjoon 1018번 
    문제 : 체스판 다시 칠하기(https://www.acmicpc.net/problem/1018)
    난이도 : 실버 5 
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `8 8
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBBBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

const white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const [N, M] = input().split(" ").map(Number);
let map = Array(N);
for (let i = 0; i < N; i++) {
  map[i] = input();
}

let answer = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < M - 7; i++) {
  for (let j = 0; j < N - 7; j++) {
    let cnt = check(j, i);
    answer = Math.min(cnt, answer);
  }
}

console.log(answer);

function check(x, y) {
  let cntBlack = 0;
  let cntWhite = 0;
  for (let i = x; i < x + 8; i++) {
    for (let j = y; j < y + 8; j++) {
      if (map[i][j] !== black[i - x][j - y]) {
        cntBlack++;
      }
      if (map[i][j] !== white[i - x][j - y]) {
        cntWhite++;
      }
    }
  }

  return Math.min(cntBlack, cntWhite);
}
