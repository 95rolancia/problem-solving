/*
    Backjoon 2108번 
    문제 : 수 정렬하기 3 (https://www.acmicpc.net/problem/2108)
    난이도 : 실버 4
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
if (N === 1) {
  const number = parseInt(input());
  console.log(number);
  console.log(number);
  console.log(number);
  console.log(0);
  process.exit();
}
const arr = Array(8001).fill(0);
let max = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < N; i++) {
  let cur = parseInt(input()) + 4000;
  arr[cur]++;
  max = Math.max(max, arr[cur]);
}

const arr2 = [];
const arr3 = [];
for (let i = 0; i < 8002; i++) {
  if (arr[i] === max) arr3.push(i - 4000);
  for (let j = 0; j < arr[i]; j++) {
    arr2.push(i - 4000);
  }
}

console.log((arr2.reduce((a, b) => a + b) / arr2.length).toFixed()); // 평균
console.log(arr2[Math.floor(arr2.length / 2)]); // 중앙값
if (arr3.length > 1) console.log(arr3[1]);
else console.log(arr3[0]);
console.log(arr2[arr2.length - 1] - arr2[0]);
