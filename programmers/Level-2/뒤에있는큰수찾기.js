/**
 * 난이도 : 2
 * 장르 : stack
 *
 * 입력 = 1,000,000 이라서 O(N) 이하로 풀이해야 한다.
 */

function solution(numbers) {
  const answer = numbers.slice();
  const stk = [];

  answer.forEach((n, i) => {
    while (stk.length > 0 && answer[stk[stk.length - 1]] < n) {
      answer[stk.pop()] = n;
    }
    stk.push(i);
  });

  while (stk.length > 0) {
    answer[stk.pop()] = -1;
  }
  return answer;
}
