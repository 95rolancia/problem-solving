/*
    Backjoon 11654번 
    문제 : 아스키 코드 (https://www.acmicpc.net/problem/11654)
    난이도 : 실버 5
*/
const fs = require("fs");
const stdin = (process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `z`).split(
  "\n"
);

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const a = input();
if (Number.isInteger(a)) {
  console.log(String.fromCharCode(a));
} else {
  console.log(a.charCodeAt(0));
}
