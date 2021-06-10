/*
    Backjoon 2941번 
    문제 : 크로아티아 알파벳 (https://www.acmicpc.net/problem/2941)
    난이도 : 실버 5
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `c=c=`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let word = input();
let newWord = word.replace(/c=|c-|dz=|d-|lj|nj|s=|z=/g, "a");
console.log(newWord.length);
