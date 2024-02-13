/*
    문제 : 오큰수 (https://www.acmicpc.net/problem/17298)
    난이도 : 골드 4
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4
3 3 3 3`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

{
  /**
   * 풀이 1. 단조스택
   */

  const n = +input();
  const arr = input().split(" ").map(Number);
  const answer = Array(n).fill(-1);
  const stk = [];

  for (let i = n - 1; i >= 0; i--) {
    const cur = arr[i];

    // 같은 것도 빼야 함.
    while (stk.length > 0 && stk[stk.length - 1] <= cur) {
      stk.pop();
    }
    // 스택이 비어있지 않음 -> 스택 최상단이 현재 수의 "오큰수"
    if (stk.length > 0) {
      answer[n - i - 1] = stk[stk.length - 1];
    }

    stk.push(cur);
  }

  console.log(answer.reverse().join(" "));
}

{
  /**
   * 풀이 2. 스택
   */
  const n = +input();
  const arr = input().split(" ").map(Number);
  const answer = Array(n).fill(-1);
  const stk = [];

  for (let i = 0; i < n; i++) {
    const cur = arr[i];

    while (stk.length > 0 && arr[stk[stk.length - 1]] < cur) {
      // 스택에서 pop한 수의 오큰수는 cur
      answer[stk.pop()] = cur;
    }

    stk.push(i);
  }

  console.log(answer);
}
