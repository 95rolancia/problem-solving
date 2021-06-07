/*
    Backjoon 1546번 
    문제 : 나머지 (https://www.acmicpc.net/problem/1546)
    난이도 : 브론즈 1
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3
10 20 30`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
const scores = input().split(" ").map(Number);
const max = Math.max(...scores);

let newScores = [];
scores.forEach((score) => {
  const newScore = (score / max) * 100;
  newScores.push(newScore);
});

let newScoresSum = newScores.reduce((a, b) => a + b);
console.log(newScoresSum / N);
