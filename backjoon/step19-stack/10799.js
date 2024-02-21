/**
 *  문제 : 쇠막대기 (https://www.acmicpc.net/problem/10799)
 *  난이도 : 실버 2
 */

const fs = require("fs");
const stdin = (process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `(((()(()()))(())()))(()())`).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

/**
 * 1 <= N <= 100,000이므로 O(NlogN)이하로 풀어야 한다.
 * 그러면 주어진 문자열을 한 번 순회해서 풀어야 한다.
 * 수식의 괄호 쌍은 스택이 적절
 *
 * 문제 접근
 * - 여는 괄호와 닫는 괄호가 연속으로 나타날 때는 "레이저"
 *   - 스택의 개수는 레이저가 자를 쇠막대기의 개수
 * - 그외에서 닫는 괄호가 나타날 때는 "쇠막대기의 끝"
 *   - 잘리고 남은 쇠막대기 1개를 더해줘야 함
 */

const str = input();
const stk = [];
let answer = 0;

for (let i = 0; i < str.length; i++) {
  const bracket = str[i];
  if (bracket === "(") {
    stk.push(bracket);
  } else {
    // 레이저
    if (str[i - 1] === "(") {
      stk.pop();
      answer += stk.length;
    } else {
      // 쇠막대기 끝
      stk.pop();
      answer += 1;
    }
  }
}

console.log(answer);
