/*
    문제 : 종이의 개수 (https://www.acmicpc.net/problem/1780)
    난이도 : 실버 3
*/
const fs = require('fs');

const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `9
0 0 0 1 1 1 -1 -1 -1
0 0 0 1 1 1 -1 -1 -1
0 0 0 1 1 1 -1 -1 -1
1 1 1 0 0 0 0 0 0
1 1 1 0 0 0 0 0 0
1 1 1 0 0 0 0 0 0
0 1 -1 0 1 -1 0 1 -1
0 -1 1 0 1 -1 0 1 -1
0 1 -1 1 0 -1 0 1 -1`
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

let minusOne = 0;
let zero = 0;
let plusOne = 0;

go(0, 0, N);

console.log(minusOne);
console.log(zero);
console.log(plusOne);

function go(row, col, size) {
  if (check(row, col, size) || size === 1) {
    switch (paper[row][col]) {
      case -1:
        minusOne += 1;
        break;
      case 0:
        zero += 1;
        break;
      case 1:
        plusOne += 1;
        break;
    }
    return;
  }

  let newSize = parseInt(size / 3);
  go(row, col, newSize);
  go(row + newSize, col, newSize);
  go(row + 2 * newSize, col, newSize);

  go(row, col + newSize, newSize);
  go(row + newSize, col + newSize, newSize);
  go(row + 2 * newSize, col + newSize, newSize);

  go(row, col + 2 * newSize, newSize);
  go(row + newSize, col + 2 * newSize, newSize);
  go(row + 2 * newSize, col + 2 * newSize, newSize);
}

function check(row, col, size) {
  for (let i = row; i < row + size; i++) {
    for (let j = col; j < col + size; j++) {
      if (paper[i][j] !== paper[row][col]) return false;
    }
  }
  return true;
}
