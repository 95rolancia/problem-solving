/*
    Backjoon 1175번 
    문제 : 문자열 반복 (https://www.acmicpc.net/problem/1175)
    난이도 : 브론즈 1
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `naaa`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

// 대 소문자로 구분하지 않고 결과는 대문자로 출력해야하니 대문자로 변환
const word = input().toUpperCase();
const freq = Array(26).fill(0);
let max = {
  idx: 0,
  freq: 0,
};

word.split("").forEach((c, i) => {
  freq[c.charCodeAt(0) - "A".charCodeAt(0)]++;
  if (freq[c.charCodeAt(0) - "A".charCodeAt(0)] > max.freq) {
    max.freq = freq[c.charCodeAt(0) - "A".charCodeAt(0)];
    max.idx = i;
  }
});

if (freq.filter((fr) => fr === max.freq).length >= 2) console.log("?");
else console.log(word[max.idx]);
