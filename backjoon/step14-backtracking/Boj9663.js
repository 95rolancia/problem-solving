/*
    문제 : N-Queen (https://www.acmicpc.net/problem/9663)
    난이도 : 골드 5
*/
const fs = require("fs");

const stdin = (process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `4`).split(
  "\n"
);

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = Number(input());
const arr = Array(N).fill(0);
let result = 0;
nQueen(0);
console.log(result);

function nQueen(depth) {
  if (depth === N) {
    console.log(arr);
    result++;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (check(depth, i)) {
      arr[depth] = i;
      nQueen(depth + 1);
    }
  }
}

function check(col, row) {
  for (let i = 0; i < col; i++) {
    if (row === arr[i]) return false;
    if (Math.abs(col - i) === Math.abs(row - arr[i])) return false;
  }
  return true;
}
