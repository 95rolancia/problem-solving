/*
    Backjoon 2908번 
    문제 : 상수 (https://www.acmicpc.net/problem/2908)
    난이도 : 브론즈 2
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `734 893`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [a, b] = input().split(" ");
const c = a.split("").reverse().join("");
const d = b.split("").reverse().join("");

console.log(Math.max(c, d));
