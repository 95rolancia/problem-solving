/*
    문제 : 암호 만들기 (https://www.acmicpc.net/problem/1759)
    난이도 : 골드 5
    키워드 : 백트래킹
*/

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4 6
a t c i s w`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [L, C] = input().split(" ").map(Number);
const alphabet = input().split(" ").sort();

const vowel = ["a", "e", "i", "o", "u"];

func("", 0);

function func(str, start) {
  if (str.length === L) {
    if (check(str)) {
      console.log(str);
    }
    return;
  }

  for (let i = start; i < C; i++) {
    func(str + alphabet[i], i + 1);
  }
}

function check(str) {
  const cntOfVowel = Array.from(str).reduce((acc, cur) => (acc += vowel.indexOf(cur) === -1 ? 0 : 1), 0);
  const cntOfConsonant = Array.from(str).reduce((acc, cur) => (acc += vowel.indexOf(cur) === -1 ? 1 : 0), 0);

  if (cntOfVowel >= 1 && cntOfConsonant >= 2) return true;
  return false;
}

// 최소 한 개의 모음 + 최소 두 개의 자음
