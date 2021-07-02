/*
    문제 : N과 M (1) (https://www.acmicpc.net/problem/15649)
    난이도 : 실버 3
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `4 4`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input().split(" ").map(Number);
const array = Array.from({ length: N }, (_, i) => i + 1);

/* recursion */
function getPerm(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 해당하는 fixed를 제외한 나머지 배열
    const permutations = getPerm(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
    const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
}

const perm = getPerm(array, M);
perm.forEach((a) => {
  console.log(a.join(" "));
});

/* back tracking */
let result = "";
function getPerm2(arr, output, visited, depth, selectNumber) {
  if (depth === selectNumber) {
    result += `${output.join(" ")}\n`;
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      output.push(arr[i]);
      getPerm2(arr, output, visited, depth + 1, selectNumber);
      output.pop();
      visited[i] = false;
    }
  }
}
