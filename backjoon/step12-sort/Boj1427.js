/*
    Backjoon 1427번 
    문제 : 소트인사이드 (https://www.acmicpc.net/problem/1427)
    난이도 : 실버 5
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `2143`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = input();
console.log(
  N.split("")
    .sort((a, b) => +b - +a)
    .join("")
);
