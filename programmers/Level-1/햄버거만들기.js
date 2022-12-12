// 2022-12-12(월)
// Level 1
function solution(ingredient) {
  let answer = 0;
  // 1 <= N <= 1000000이므로 O(N)에 끝내야 한다.
  const stk = [];
  ingredient.forEach((v) => {
    stk.push(v);
    const length = stk.length;
    if (length >= 4 && stk[length - 1] === 1) {
      const first = stk[length - 4];
      const second = stk[length - 3];
      const third = stk[length - 2];

      if (first === 1 && second === 2 && third === 3) {
        stk.pop();
        stk.pop();
        stk.pop();
        stk.pop();
        answer++;
      }
    }
  });

  return answer;
}
