/*
    Backjoon 2869번 
    문제 : 달팽이는 올라가고 싶다 (https://www.acmicpc.net/problem/2869)
    난이도 : 브론즈 1
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `5 1 6`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

//  height가 아니라 (height - night)을 등반하는 것이 핵심
const [day, night, height] = input().split(" ").map(Number);
let result = (height - night) / (day - night);
console.log(Math.ceil(result));
