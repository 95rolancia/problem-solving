/*
    Backjoon 10809번 
    문제 : 알파벳 찾기 (https://www.acmicpc.net/problem/10809)
    난이도 : 브론즈 2
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `aaabbb`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const S = input();

const freq = Array(26).fill(-1);
S.split("").forEach((a, i) => {
  if (freq[a.charCodeAt(0) - "a".charCodeAt(0)] === -1) {
    freq[a.charCodeAt(0) - "a".charCodeAt(0)] = i;
  }
});

console.log(freq.join(" "));
