/*
    Backjoon 3050번 
    문제 : 택시 기하학(https://www.acmicpc.net/problem/3050)
    난이도 : 브론즈 3
*/
const fs = require("fs");
const stdin = (process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `1`).split(
  "\n"
);

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const R = parseInt(input());
console.log((Math.PI * R * R).toFixed(6));
console.log((R * R * 2).toFixed(6));
