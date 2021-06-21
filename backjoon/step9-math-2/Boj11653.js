/*
    Backjoon 11653번 
    문제 : 소인수분해(https://www.acmicpc.net/problem/11653)
    난이도 : 실버 4
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `9991`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let N = parseInt(input());
let divider = 2;
while (N !== 1) {
  if (N % divider === 0) {
    N /= divider;
    console.log(divider);
  } else {
    divider++;
  }
}
