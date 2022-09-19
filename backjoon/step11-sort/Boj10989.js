/*
    Backjoon 10989번 
    문제 : 수 정렬하기 3 (https://www.acmicpc.net/problem/10989)
    난이도 : 실버 5
    
    이 문제는 주어진 테스트케이스를 읽는 부분부터 메모리 초과가 발생해서 NodeJS로는 풀 수 없는듯...
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `10
5
2
3
1
4
2
3
5
1
7`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
const arr = new Array(10001).fill(0);

for (let i = 0; i < N; i++) {
  arr[parseInt(input())]++;
}

for (let i = 1; i < 10001; i++) {
  for (let j = 0; j < arr[i]; j++) {
    process.stdout.write(i + "\n");
  }
}
