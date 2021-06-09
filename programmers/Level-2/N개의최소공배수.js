/**
 * 프로그래머스
 * Level 2
 * N개의 최소 공배수(https://programmers.co.kr/learn/courses/30/lessons/12953?language=javascript)
 *
 */

function solution(arr) {
  let answer = lcm(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }
  return answer;
}

function lcm(a, b) {
  let min = a > b ? a : b;
  while (true) {
    if (min % a === 0 && min % b === 0) {
      return min;
    }
    min++;
  }
}

{
  // 다른 풀이 방법 gcd 이용
  function solution(arr) {
    return arr.reduce((a, b) => (a * b) / gcd(a, b));
  }

  function gcd(a, b) {
    return a % b ? gcd(b, a % b) : b;
  }
}

const testcase1 = [2, 6, 8, 14];
const answer1 = 168;

const testcase2 = [1, 2, 3];
const answer2 = 6;

console.log(solution(testcase1));
console.log(solution(testcase2));
