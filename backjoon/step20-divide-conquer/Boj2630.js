/*
    문제 : 색종이 만들기 (https://www.acmicpc.net/problem/2630)
    난이도 : 실버 3
*/
const fs = require('fs');

const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `8
1 1 0 0 0 0 1 1
1 1 0 0 0 0 1 1
0 0 0 0 1 1 0 0
0 0 0 0 1 1 0 0
1 0 0 0 1 1 1 1
0 1 0 0 1 1 1 1
0 0 1 1 1 1 1 1
0 0 1 1 1 1 1 1`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
let paper = [];
for (let i = 0; i < N; i++) {
  paper.push(input().split(' ').map(Number));
}

let white = 0;
let blue = 0;
go(0, 0, N);
console.log(white);
console.log(blue);

function go(row, col, size) {
  if (check(row, col, size)) {
    if (paper[row][col] === 0) {
      white++;
    } else {
      blue++;
    }
    return;
  }
  let newSize = parseInt(size / 2);
  go(row, col, newSize);
  go(row, col + newSize, newSize);
  go(row + newSize, col, newSize);
  go(row + newSize, col + newSize, newSize);
}

function check(row, col, size) {
  let basic = paper[row][col];
  for (let i = row; i < row + size; i++) {
    for (let j = col; j < col + size; j++) {
      if (paper[i][j] !== basic) return false;
    }
  }
  return true;
}
