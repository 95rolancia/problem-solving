/*
    Backjoon 2447번 
    문제 : 별찍기 - 10(https://www.acmicpc.net/problem/2447)
    난이도 : 실버 1
*/
const fs = require("fs");
const { start } = require("repl");
const stdin = (process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `9`).split(
  "\n"
);

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let result = "";
const N = parseInt(input());
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    star(i, j, N);
  }
  result += "\n";
  // process.stdout.write("\n");
}
console.log(result);
function star(i, j, num) {
  if (Math.floor(i / num) % 3 === 1 && Math.floor(j / num) % 3 === 1) {
    result += " ";
    //process.stdout.write(" ");
  } else {
    if (Math.floor(num / 3) === 0) {
      result += "*";
      //process.stdout.write("*");
    } else star(i, j, Math.floor(num / 3));
  }
}
