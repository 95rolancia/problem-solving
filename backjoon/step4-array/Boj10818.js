/*
    Backjoon 10818번 
    문제 : 최소, 최대 (https://www.acmicpc.net/problem/10818)
    난이도 : 브론즈 3
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
7 10 35 30 7`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let min = 1000000;
let max = -1000000;

const len = +input();
const arr = input().split(" ").map(Number);

arr.forEach((num) => {
  if (num > max) max = num;
  if (num < min) min = num;
});
console.log(min, max);
