const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `1000 70 170`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

/*
    백준 1712번 : 손익분기점
    난이도 : 브론즈 4
    알고리즘 분류 : 구현
*/

/* start coding */
const [A, B, C] = input().split(" ").map(Number);

let stock = 1;

if (B >= C) {
  console.log(-1);
} else {
  console.log(Math.floor(A / (C - B) + 1));
}
