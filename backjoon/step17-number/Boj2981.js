/*
    문제 : 검문 (https://www.acmicpc.net/problem/2981)
    난이도 : 골드 5
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
6  
36  
216`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
let arr = [];
for (let i = 0; i < N; i++) {
  arr.push(+input());
}

arr.sort((a, b) => a - b);
let answer = '';
for (let i = 2; i <= arr[0]; i++) {
  let find = true;
  let first = arr[0] % i;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] % i !== first) {
      find = false;
      break;
    }
  }

  if (find) {
    answer += i + ' ';
  }
}

console.log(answer);
