/*
    문제 : 두 수의 합 (https://www.acmicpc.net/problem/3273)
    난이도 : 골드 4
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `9
5 12 7 10 9 1 2 3 11
13`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const n = parseInt(input());
const arr = input().split(" ").map(Number);
arr.sort((a, b) => a - b);
const target = parseInt(input());

// 1 <= n <= 100,000 -> 완전 탐색 시 O(n^2)
// -> 1억당 1초 계산시 최악의 경우 10억번이므로 10초가 걸린다.
// 하지만 제한 시간은 1초다.
// O(n) 밑으로 해결해야 한다!

// 투 포인터를 사용해서 O(n)에 해결해보자.

let left = 0;
let right = n - 1;
let answer = 0;

while (left < right) {
  const sum = arr[left] + arr[right];
  if (sum < target) {
    left++;
  } else if (sum > target) {
    right--;
  } else {
    console.log(arr[left], arr[right]);
    answer++;
    left++;
  }
}

console.log(answer);
