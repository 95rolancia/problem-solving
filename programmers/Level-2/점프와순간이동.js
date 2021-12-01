// https://programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
  let temp = n;
  let cnt = 0;
  while (temp !== 0) {
    if (temp % 2 === 0) {
      temp /= 2;
    } else {
      temp--;
      cnt++;
    }
  }
  return cnt;
}
