/*
    Backjoon 2108번 
    문제 : 수 정렬하기 3 (https://www.acmicpc.net/problem/2108)
    난이도 : 실버 3
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
1
2
3
4
5`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
const arr = Array(8001).fill(0);
const numbers = [];
// -3999 ~ 3999 > 1 ~ 7999
let sum = 0;
let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

let maxFreqCnt = -1;
let maxFreqArr = [];

for (let i = 0; i < N; i++) {
  const value = parseInt(input());
  numbers.push(value);
  sum += value;
  arr[value + 4000]++;

  if (max < value) {
    max = value;
  }

  if (min > value) {
    min = value;
  }

  if (maxFreqCnt < arr[value + 4000]) {
    maxFreqCnt = arr[value + 4000];
  }
}
numbers.sort((a, b) => a - b);

// 1. 산술평균
console.log(Math.round(sum / N).toString());

// 2. 중앙값
console.log(numbers[Math.floor(N / 2)]);

// 3. 최빈값
const freq = [];
for (let i = 0; i < 8001; i++) {
  if (arr[i] === maxFreqCnt) {
    freq.push(i - 4000);
  }
}

console.log(freq);

const freq2 = arr.filter((v) => v === maxFreqCnt);
console.log(freq2);

if (freq.length > 1) {
  console.log(freq[1]);
} else {
  console.log(freq[0]);
}

// 4. 범위
console.log(max - min);
