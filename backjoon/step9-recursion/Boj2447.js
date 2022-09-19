/*
    Backjoon 2447번 
    문제 : 별찍기 - 10(https://www.acmicpc.net/problem/2447)
    난이도 : 실버 1
*/
const fs = require("fs");
const { start } = require("repl");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `3`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());

function recurStr(size) {
  if (size === 3) {
    return ["***", "* *", "***"];
  }

  const prev = recurStr(size / 3);
  let ret = [];

  for (let line of prev) {
    ret.push(line.repeat(3));
  }

  for (let line of prev) {
    ret.push(line + " ".repeat(size / 3) + line);
  }

  for (let line of prev) {
    ret.push(line.repeat(3));
  }

  return ret;
}

console.log(recurStr(27).join("\n"));
