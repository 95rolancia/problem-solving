/*
    Backjoon 3052번 
    문제 : 나머지 (https://www.acmicpc.net/problem/3052)
    난이도 : 브론즈 2
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1
2
3
4
5
6
7
8
9
10`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const remain = Array(42).fill(0);

for (let i = 0; i < 10; i++) {
  const number = parseInt(input());
  remain[number % 42]++;
}

console.log(remain.filter((a) => a !== 0).length);
