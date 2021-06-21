/*
    Backjoon 1080번 
    문제 :직사각형에서 탈출(https://www.acmicpc.net/problem/1080)
    난이도 : 브론즈 3
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `6 2 10 3`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [x, y, w, h] = input().split(" ").map(Number);
console.log(Math.min(x, y, w - x, h - y));
