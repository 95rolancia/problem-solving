/*
    Backjoon 2751번 
    문제 : 수 정렬하기 2 (https://www.acmicpc.net/problem/2751)
    난이도 : 실버 5
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
5
2
3
4
1`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const arr = [];
const N = parseInt(input());

for (let i = 0; i < N; i++) {
  arr.push(parseInt(input()));
}

arr.sort((a, b) => a - b);
arr.forEach((v) => console.log(v));
