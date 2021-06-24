/*
    Backjoon 7568번 
    문제 : 분해합(https://www.acmicpc.net/problem/7568)
    난이도 : 실버 5 
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
55 185
58 183
88 186
60 175
46 155`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
const arr = [];
let answer = [];
for (let i = 0; i < N; i++) {
  const [weight, height] = input().split(" ").map(Number);
  arr.push({ weight, height });
}

arr.forEach((v1, i1) => {
  let rank = 1;
  arr.forEach((v2, i2) => {
    if (i1 === i2) return;
    if (v1.height < v2.height && v1.weight < v2.weight) rank++;
  });
  answer.push(rank);
});

console.log(answer.join(" "));
