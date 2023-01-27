/*
    Backjoon 2108번 
    문제 : 수 정렬하기 3 (https://www.acmicpc.net/problem/2108)
    난이도 : 실버 3
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1
4000`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
const arr = Array(8001).fill(0);
// -3999 ~ 3999 > 1 ~ 7999
let sum = 0;
let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < N; i++) {
  const value = parseInt(input());
  sum += value;
  arr[value + 4000]++;

  if (max < value) {
    max = value;
  }

  if (min > value) {
    min = value;
  }
}
// 1. 산술평균
console.log((sum / N).toFixed(0));

let median = 10000;
let mode = 10000;
let count = 0; // 중앙값 빈도 누적 수
let mode_max = 0; // 최빈값의 최댓값

let flag = false;

for (let i = min + 4000; i <= max + 4000; i++) {
  if (arr[i] > 0) {
    if (count < Math.floor((N + 1) / 2)) {
      count += arr[i];
      median = i - 4000;
    }

    if (mode_max < arr[i]) {
      mode_max = arr[i];
      mode = i - 4000;
      flag = true;
    } else if (mode + max === arr[i] && flag) {
      mode = i - 4000;
      flag = false;
    }
  }
}
console.log(median);
console.log(mode);

// 4. 범위
console.log(max - min);
