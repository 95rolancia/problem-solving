const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
9 3 5 6 5`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

/**
 * 1 <= 탑의 개수 <= 500,000 이므로 O(nlogn) 이하로 풀어야 한다.
 * 1 <= 탑들의 높이 <= 100,000,000
 */

const n = +input();
const arr = input().split(" ").map(Number);
const stk = [[100000001, 0]]; // 제일 왼쪽에는 1억보다 1이 큰 탑을 세운다
let answer = "";

for (let i = 1; i <= n; i++) {
  const height = arr[i - 1]; // 현재 탑의 높이

  // 스택에서 현재 탑의 높이보다 낮은 탑들은 전부 뺀다.
  while (stk[stk.length - 1][0] < height) {
    stk.pop();
  }
  // 위에서 현재 탑의 높이보다 낮은 탑들은 전부 뺐으니 스택의 최상단에는
  // 수신을 받을 탑이 남는다.
  answer += stk[stk.length - 1][1] + " ";
  // 현재 탑을 스택에 넣는다.
  stk.push([height, i]);
}

console.log(answer);
