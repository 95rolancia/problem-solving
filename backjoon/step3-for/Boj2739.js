/*
    Backjoon 2739번 
    문제 : 구구단 (https://www.acmicpc.net/problem/2739)
    난이도 : 브론즈 3
*/

const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `23`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());

for (let i = 1; i < 10; i++) {
  console.log(`${N} * ${i} = ${N * i}`);
}
