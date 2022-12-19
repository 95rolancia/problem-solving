// Level 1
// 1 <= s.length <= 10000
function solution(s) {
  const answer = [];
  const dict = {};

  Array.from(s).forEach((c, idx) => {
    if (dict[c] != null) {
      answer.push(idx - dict[c]);
      dict[c] = idx;
    } else {
      answer.push(-1);
      dict[c] = idx;
    }
  });
  return answer;
}
