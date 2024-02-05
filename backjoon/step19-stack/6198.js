const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `6
10
3
7
4
12
2`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const n = +input();

/**
 * 백준 6198 옥상 정원 꾸미기
 *
 * 1 <= n <= 80,000 -> O(NlogN) 이하로 풀어야 함
 *
 * Monotonic Stack(단조 스택)을 활용하여 스택을 내림차순으로 정렬하면서
 * 각 높이마다 자신의 옥상을 들여다보는 빌딩의 개수를 구할 수 있음
 *
 * ex. [10, 3, 7, 4, 12, 2]
 * 1. Push 10 -> [10] -> 10을 내려다볼 수 있는 빌딩은 없음
 * 2. Push 3 -> [10, 3] -> 3은 10이 내려다 보고 있음
 * 3. Push 7 하기전에 7보다 작은 것들은 모두 Pop 후 Push 7 -> [10, 7] -> 7은 10이 내려다 보고 있음
 * ...
 * 이런 식으로 단조 스택을 활용하여 내림차순으로 정렬해주면서 풀이 가능
 */

let answer = 0;
const stk = [];

for (let i = 0; i < n; i++) {
  const height = +input();

  while (stk.length > 0 && stk[stk.length - 1] <= height) {
    stk.pop();
  }

  stk.push(height);
  answer += stk.length - 1;
}

console.log(answer);
