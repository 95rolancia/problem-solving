/*
    Backjoon 1110번 
    문제 : 더하기 사이클 (https://www.acmicpc.net/problem/1110)
    난이도 : 브론즈 1
*/

const fs = require("fs");
const stdin = (process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `0`).split(
  "\n"
);

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let start = parseInt(input());
let basis = start;
let cnt = 0;

while (true) {
  let nextFirst = start % 10;
  let nextSecond = (Math.floor(start / 10) + nextFirst) % 10;
  start = nextFirst + "" + (nextSecond + "");
  start = parseInt(start);
  cnt++;
  if (start === basis) break;
}
console.log(cnt);
