/*
    문제 : 로또 (https://www.acmicpc.net/problem/6603)
    난이도 : 실버 3
    키워드 : 백트래킹
*/

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

while (true) {
  const inputs = input().split(" ").map(Number);
  if (inputs[0] === 0) break;

  const k = inputs[0];
  const numbers = inputs.slice(1).sort((a, b) => a - b);

  func(0, 0, Array(6).fill(null), Array(k).fill(false), numbers);
  console.log();
}

function func(cur, start, arr, visited, numbers) {
  if (cur === arr.length) {
    console.log(arr.join(" "));
    return;
  }

  for (let i = start; i < visited.length; i++) {
    if (!visited[i]) {
      arr[cur] = numbers[i];
      visited[i] = true;
      func(cur + 1, i + 1, arr, visited, numbers);
      arr[cur] = null;
      visited[i] = false;
    }
  }
}
