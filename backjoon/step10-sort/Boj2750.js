/*
    문제 : 수 정렬하기 (https://www.acmicpc.net/problem/2750)
    난이도 : 브론즈 2
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

const N = parseInt(input());
const arr = [];
for (let i = 0; i < N; i++) {
  arr.push(parseInt(input()));
}

arr.sort((a, b) => a - b);
console.log(arr.join("\n"));
