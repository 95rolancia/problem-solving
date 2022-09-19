/*
    Backjoon 1712번 
    문제 : 손익분기점 (https://www.acmicpc.net/problem/1712)
    난이도 : 브론즈 4
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `1000 70 169`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [base, costPrice, sellingprice] = input().split(" ").map(Number);
let x = 0;

if (costPrice >= sellingprice) console.log(-1);
else {
  console.log((base / (sellingprice - costPrice) + 1).toFixed());
}
