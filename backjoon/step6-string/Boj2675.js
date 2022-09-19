/*
    Backjoon 2675번 
    문제 : 문자열 반복 (https://www.acmicpc.net/problem/2675)
    난이도 : 브론즈 2
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
3 ABC
5 /HTP`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const T = parseInt(input());

for (let i = 0; i < T; i++) {
  const [R, S] = input().split(" ");
  let result = "";
  // S.split("").forEach((char) => {
  //   result += char.repeat(R);
  // });

  for (let char of S) {
    result += char.repeat(R);
  }
  console.log(result);
}
