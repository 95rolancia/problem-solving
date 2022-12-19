/*
    Backjoon 10807번 
    문제 : 개수세기 (https://www.acmicpc.net/problem/10807)
    난이도 : 브론즈 5
    푼 날짜 : 2022/12/17/토
*/
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `11
1 4 1 2 4 2 4 2 3 4 4
2`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

// 총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구하는 프로그램을 작성하시오.
// 첫째 줄에 정수의 개수 1 <= N <= 100
// 둘째 줄에 정수가 공백으로 구분
// 셋째 줄에 찾으려고하는 정수 v
/**
 * N이 100이하이므로 단순 백트래킹으로 구현해도 될듯
 */

const N = parseInt(input());
const arr = input().split(" ").map(Number);
const v = parseInt(input());
const result = getCountOfValue(arr, v);

console.log(result);

function getCountOfValue(arr, v) {
  return arr.filter((a) => a === v).length;
}
