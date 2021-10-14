/*
    문제 : 숫자 카드 2 (https://www.acmicpc.net/problem/10816)
    난이도 : 실버 4
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const arrN = input().split(' ').map(Number);

const M = +input();
const arrM = input().split(' ').map(Number);

const sortedArrN = arrN.sort((a, b) => a - b);
let result = '';
arrM.forEach((e) => {
  result += upperBound(e, sortedArrN) - lowerBound(e, sortedArrN) + ' ';
});
console.log(result);

function lowerBound(number, arr) {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (number <= arr[mid]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
}

function upperBound(number, arr) {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (number < arr[mid]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
}
