/*
    Backjoon 2839번 
    문제 : 설탕 배달(https://www.acmicpc.net/problem/2839)
    난이도 : 브론즈 1
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `18`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());

let five = parseInt(N / 5);
console.log(five);
