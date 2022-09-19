/*
    문제 : 좌표 압축 (https://www.acmicpc.net/problem/18870)
    난이도 : 실버 2
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `6
1000 999 1000 999 1000 999`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
const arr = input().split(" ").map(Number);
const indexer = [...new Set(arr)].sort((a, b) => a - b);
const hashedIndexer = new Map();
for (let i = 0; i < indexer.length; i++) {
  hashedIndexer.set(indexer[i], i);
}
const result = [];
for (let i = 0; i < N; i++) {
  result.push(hashedIndexer.get(arr[i]));
}

console.log(result.join(" "));

// let result = "";
// const N = parseInt(input());
// const arr = input().split(" ").map(Number);
// const arrCopy = [...arr];

// arr.sort((a, b) => a - b);
// const sortedArr = [...new Set(arr)];
// console.log(sortedArr, arrCopy);

// arrCopy.forEach((a) => (result += sortedArr.indexOf(a) + " "));

// console.log(result);
