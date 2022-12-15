/*
    문제 : 대표값2 (https://www.acmicpc.net/problem/2587)
    난이도 : 브론즈 2
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `10
40
30
60
30`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(parseInt(input()));
}

// 1. 정렬
arr.sort((a, b) => a - b);
// 2. 평균
const average = arr.reduce((acc, cur) => (acc += cur / arr.length), 0);
// 3. 중앙값
const middleValue = arr[2];

console.log(average);
console.log(middleValue);
