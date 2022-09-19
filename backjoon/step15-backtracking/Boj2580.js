/*
    문제 : 스도쿠 (https://www.acmicpc.net/problem/2580)
    난이도 : 골드 4
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const sudoku = Array.from({ length: 9 }, () => []);
const zeroArr = [];
for (let i = 0; i < 9; i++) {
  const temp = input().split(" ").map(Number);
  for (let j = 0; j < 9; j++) {
    if (temp[j] === 0) {
      zeroArr.push([i, j]);
    }
    sudoku[i][j] = temp[j];
  }
}

fillSudoku(0);

function fillSudoku(depth) {
  // console.log(sudoku, depth);
  if (depth === zeroArr.length) {
    sudoku.forEach((row) => {
      console.log(row.join(" "));
    });
    process.exit();
  }

  for (let i = 1; i < 10; i++) {
    if (possible(depth, i)) {
      fill(depth, i);
      fillSudoku(depth + 1);
      fill(depth, 0);
    }
  }
}

function possible(loc, target) {
  const [x, y] = zeroArr[loc];
  // 가로
  for (let i = 0; i < 9; i++) {
    if (sudoku[x][i] === target) return false;
  }
  // 세로 체크
  for (let i = 0; i < 9; i++) {
    if (sudoku[i][y] === target) return false;
  }
  // 블록 체크

  for (let i = Math.floor(x / 3) * 3; i < Math.floor(x / 3) * 3 + 3; i++) {
    for (let j = Math.floor(y / 3) * 3; j < Math.floor(y / 3) * 3 + 3; j++) {
      if (sudoku[i][j] === target) return false;
    }
  }

  return true;
}

function fill(depth, i) {
  const [x, y] = zeroArr[depth];
  sudoku[x][y] = i;
}
