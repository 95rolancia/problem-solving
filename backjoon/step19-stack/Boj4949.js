/*
    문제 : 균형잡힌 세상 (https://www.acmicpc.net/problem/4949)
    난이도 : 실버 4
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const map = {
  "[": "]",
  "(": ")",
};

while (true) {
  const sentence = input();
  // ".으로 시작하면 끝"
  if (sentence[0] === ".") break;

  let answer = "yes";
  const stk = [];
  for (const char of Array.from(sentence)) {
    // 여는 괄호일 때
    if (Object.keys(map).indexOf(char) !== -1) {
      stk.push(char);

      // 닫는 괄호일 때
    } else if (Object.values(map).indexOf(char) !== -1) {
      // 닫는 괄호일 때 현재 문자가 스택 최상단 값과 짝일 때 스택에서 제거
      if (stk.length > 0 && map[stk[stk.length - 1]] === char) {
        stk.pop();
      } else {
        // 괄호쌍이 만들어지지 않으므로 종료
        answer = "no";
        break;
      }
    }
  }
  // 스택이 비워지지 않았다면 쌍을 못찾음
  if (stk.length > 0) answer = "no";

  console.log(answer);
}
