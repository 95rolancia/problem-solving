function solution(word) {
  let answer = 0;
  const dict = { A: 0, E: 1, I: 2, O: 3, U: 4 };
  const arr = [781, 156, 31, 6, 1];

  Array.from(word).forEach((s, i) => {
    answer += dict[s] * arr[i] + 1;
  });

  return answer;
}
