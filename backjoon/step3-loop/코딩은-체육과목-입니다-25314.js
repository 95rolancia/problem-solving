/*
    난이도 : 브론즈 5
    키워드 : 사칙연산
*/

const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `4`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());

console.log("long ".repeat(N / 4) + "int");
