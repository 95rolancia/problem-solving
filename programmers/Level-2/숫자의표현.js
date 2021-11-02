// https://programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      const curSum = getSum(i, j);
      if (curSum > n) break;
      if (curSum === n) {
        answer++;
        break;
      }
    }
  }

  return answer;
}

function getSum(start, end) {
  let result = 0;
  for (let i = start; i <= end; i++) {
    result += i;
  }
  return result;
}
