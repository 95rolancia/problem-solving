/*
    Backjoon 2577번 
    문제 : 숫자의 개수 (https://www.acmicpc.net/problem/2577)
    난이도 : 브론즈 2
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `150
266
427`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const a = parseInt(input());
const b = parseInt(input());
const c = parseInt(input());

const multiply = a * b * c;

const result = Array(10).fill(0);

multiply.toString().forEach((number) => {
  result[+number]++;
});

result.forEach((a) => console.log(a));
