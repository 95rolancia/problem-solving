/*
    문제 : 쿼드트리 (https://www.acmicpc.net/problem/1992)
    난이도 : 실버 1
*/
const fs = require('fs');

const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `8
11110000
11110000
00011100
00011100
11110000
11110000
11110011
11110011`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
let paper = [];
for (let i = 0; i < N; i++) {
  paper.push(input());
}

let answer = '';
go(0, 0, N);
console.log(answer);

function go(row, col, size) {
  if (check(row, col, size)) {
    answer += paper[row][col];
    return;
  }
  let newSize = parseInt(size / 2);
  answer += '(';
  go(row, col, newSize);
  go(row, col + newSize, newSize);
  go(row + newSize, col, newSize);
  go(row + newSize, col + newSize, newSize);
  answer += ')';
}

function check(row, col, size) {
  for (let i = row; i < row + size; i++) {
    for (let j = col; j < col + size; j++) {
      if (paper[i][j] !== paper[row][col]) return false;
    }
  }
  return true;
}
