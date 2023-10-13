/**
 * 난이도 : Level 2
 * 키워드 : 큐, 투포인터
 *
 */

function solution(q1, q2) {
  let sum1 = q1.reduce((prev, cur) => prev + cur, 0);
  let sum2 = q2.reduce((prev, cur) => prev + cur, 0);
  const half = (sum1 + sum2) / 2;
  const q = [...q1, ...q2];
  let left = 0;
  let right = q1.length;

  // q1 길이의 3배(q1, q2 길이가 같으므로)까지 순회
  for (let cnt = 0; cnt < q1.length * 3; cnt++) {
    if (sum1 === half) {
      return cnt;
    }
    sum1 =
      sum1 > half ? sum1 - q[left++ % q.length] : sum1 + q[right++ % q.length];
  }

  return -1;
}
