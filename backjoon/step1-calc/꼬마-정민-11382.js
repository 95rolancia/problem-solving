/*
    문제 : 꼬마 정민 (https://www.acmicpc.net/problem/11382)
    난이도 : 브론즈 5
    키워드 : 사칙연산
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1000000000000 1000000000000 1000000000000`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [A, B, C] = input().split(" ").map(Number);

console.log(A + B + C);
