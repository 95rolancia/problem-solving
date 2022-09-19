/*
    문제 : 두 수의 합 (https://www.acmicpc.net/problem/3273)
    난이도 : 골드 4
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `9
5 12 7 10 9 1 2 3 11
13`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
const arr = input().split(' ').map(Number);
const X = parseInt(input());

arr.sort((a, b) => a - b);

let answer = 0;
let left = 0;
let right = N - 1;

while (left < right) {
  const sum = arr[left] + arr[right];
  if (sum === X) {
    answer++;
    left++;
    right--;
  } else if (sum < X) {
    left++;
  } else {
    right--;
  }
}

console.log(answer);
