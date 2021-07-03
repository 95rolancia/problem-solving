/*
    문제 : 스타트와 링크 (https://www.acmicpc.net/problem/14889)
    난이도 : 실버 3
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4
0 1 2 3
4 0 5 6
7 1 0 2
3 4 5 0`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const map = [];
for (let i = 0; i < N; i++) {
  map.push(input().split(" ").map(Number));
}

console.log(map);
