/*
    Backjoon 2798번 
    문제 : 블랙잭(https://www.acmicpc.net/problem/2798)
    난이도 : 브론즈 2 
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5 21
5 6 7 8 9`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input().split(" ").map(Number);
const arr = input().split(" ").map(Number);

// 3중 for문 풀이
let answer = 0;
for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      const cur = arr[i] + arr[j] + arr[k];
      if (cur <= M && answer < cur) answer = cur;
    }
  }
}

console.log(answer);

// 재귀를 이용한 조합 풀이
const getCombinations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });
  return results;
};

let answer2 = 0;
getCombinations(arr, 3).forEach((a) => {
  const cur = a.reduce((b, c) => b + c);
  if (cur <= M && answer2 < cur) answer2 = cur;
});

console.log(answer2);
