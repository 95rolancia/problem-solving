/*
    문제 : 스타트와 링크 (https://www.acmicpc.net/problem/14889)
    난이도 : 실버 3
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `6
0 1 2 3 4 5
1 0 2 3 4 5
1 2 0 3 4 5
1 2 3 0 4 5
1 2 3 4 0 5
1 2 3 4 5 0`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const people = Array.from({ length: N }, (_, i) => i);
const map = [];
let answer = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < N; i++) {
  map.push(input().split(" ").map(Number));
}

comb(0, 0, []);
console.log(answer);

function comb(depth, start, output) {
  if (depth === N / 2) {
    const anotherTeam = people.filter((a) => output.indexOf(a) === -1);
    const firstAbility = getAllAbility(output);
    const secondAbility = getAllAbility(anotherTeam);
    console.log(firstAbility, secondAbility);
    answer = Math.min(answer, Math.abs(secondAbility - firstAbility));
    return;
  }
  for (let i = start; i < N; i++) {
    output.push(i);
    comb(depth + 1, i + 1, output);
    output.pop();
  }
}

function getAllAbility(arr) {
  console.log(arr);
  let sum = 0;
  let arr2 = [];
  comb2(0, 0, []);

  arr2.forEach((loc) => {
    const [x, y] = loc;
    sum += map[x][y] + map[y][x];
  });
  return sum;

  function comb2(depth, start, output) {
    if (depth >= 2) {
      arr2.push([...output]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      output.push(arr[i]);
      comb2(depth + 1, i + 1, output);
      output.pop();
    }
  }
}
