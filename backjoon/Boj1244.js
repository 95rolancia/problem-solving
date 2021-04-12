const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `30
0 1 0 1 0 0 0 1 0 1 0 1 0 0 0 1 0 1 0 1 0 0 0 1 0 1 0 1 0 0
2
1 3
2 3`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

/*
    백준 1244번 : 스위치 켜고 끄기
    난이도 : 실버 4
    알고리즘 분류 : 구현
*/

/* start coding */
const toggle = (arr, idx) => {
  if (arr[idx] === 0) arr[idx] = 1;
  else arr[idx] = 0;
};

const N = parseInt(input());
let arr = input().split(" ").map(Number);
const M = parseInt(input());

for (let i = 0; i < M; i++) {
  const [gender, number] = input().split(" ").map(Number);
  if (gender === 1) {
    arr.forEach((_, idx) => {
      if ((idx + 1) % number === 0) toggle(arr, idx);
    });
  } else if (gender === 2) {
    let start = number;
    let end = number;
    while (start >= 1 && end <= N) {
      if (arr[start - 1] === arr[end - 1]) {
        start--;
        end++;
      } else {
        break;
      }
    }
    start++;
    end--;

    for (; start <= end; start++) {
      toggle(arr, start - 1);
    }
  }
}

for (let i = 0; i < N / 20; i++) {
  console.log(arr.slice(20 * i, (i + 1) * 20).join(" "));
}
