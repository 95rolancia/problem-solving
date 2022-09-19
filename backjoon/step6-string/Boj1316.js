/*
    Backjoon 1316번 
    문제 : 그룹 단어 체크 (https://www.acmicpc.net/problem/1316)
    난이도 : 실버 5
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3
happy
newn
year`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
let result = 0;

for (let i = 0; i < N; i++) {
  const word = input();
  if (check(word)) result++;
}

console.log(result);

function check(word) {
  let alpha = Array(26).fill(false);
  for (let i = 0; i < word.length; i++) {
    // 한 번도 체크된적 없을 때
    if (!alpha[word[i].charCodeAt(0) - "a".charCodeAt(0)]) {
      alpha[word[i].charCodeAt(0) - "a".charCodeAt(0)] = true;
    } else {
      // 이전의 문자랑 같을 때
      if (word[i] === word[i - 1]) continue;
      // 그룹 단어가 아닐 때
      else return false;
    }
  }
  // 그룹 단어일 때
  return true;
}
