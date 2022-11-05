// Level 2 최솟값 만들기
function solution(A, B) {
  const sortedA = A.slice().sort((a, b) => a - b);
  const sortedB = B.slice().sort((a, b) => b - a);
  const result = sortedA.reduce(
    (acc, cur, idx) => (acc += cur * sortedB[idx]),
    0
  );
  return result;
}
