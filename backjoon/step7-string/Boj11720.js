/*
    Backjoon 11720번 
    문제 : 숫자의 합 (https://www.acmicpc.net/problem/11720)
    난이도 : 브론즈 2
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `25
7000000000000000000000000`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
const s = input();
let result = 0;
s.split("").forEach((a) => {
  result += parseInt(a);
});

console.log(result);
