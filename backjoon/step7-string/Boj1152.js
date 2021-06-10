/*
    Backjoon 1152번 
    문제 : 단어의 개수 (https://www.acmicpc.net/problem/1152)
    난이도 : 브론즈 2
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `  `
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const words = input().trim().split(" ");
if (words[0] === "") console.log(0);
else console.log(words.length);
