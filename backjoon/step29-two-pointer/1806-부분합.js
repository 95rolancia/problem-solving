const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5 15
1 1 1 1 1`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

// 10 <= N < 100,000 이므로 O(nlogn) 이하로 풀어보자!
// 투포인터 활용

const [N, S] = input().split(" ").map(Number);
const arr = input().split(" ").map(Number);

let left = 0;
let right = 0;
let sum = arr[left];
let answer = Number.MAX_SAFE_INTEGER;

// left <= right 인 이유 left, right가 같은 케이스도 있다.

while (left <= right && right < arr.length) {
  if (sum >= S) {
    answer = Math.min(answer, right - left + 1);
    sum -= arr[left++];
  } else {
    sum += arr[++right];
  }
}

answer === Number.MAX_SAFE_INTEGER ? console.log(0) : console.log(answer);
