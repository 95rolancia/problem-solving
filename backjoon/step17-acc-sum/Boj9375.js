/*
    문제 : 패션왕 신혜빈 (https://www.acmicpc.net/problem/9375)
    난이도 : 실버 3
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2
  3
hat headgear
sunglasses eyewear
turban headgear
3
mask face
sunglasses face
makeup face`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const T = +input();
for (let tcCnt = 0; tcCnt < T; tcCnt++) {
  let N = +input();
  let dict = {};
  for (let i = 0; i < N; i++) {
    const [name, type] = input().split(' ');
    if (dict[type]) dict[type]++;
    else dict[type] = 1;
  }

  let comb = 1;
  for (let i in dict) {
    comb *= dict[i] + 1;
  }
  console.log(comb - 1);
}
