// Level2 올바른 괄호

function solution(s) {
  const stk = [];
  const arr = Array.from(s);
  // 길이가 짝수가 아닐 때 or 첫 문자가 닫는 괄호일 때 올바른 괄호가 아님
  if (s.length % 2 !== 0 || arr[0] === ")") {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      stk.push(arr[i]);
    } else {
      if (stk.length === 0) {
        return false;
      }
      stk.pop();
    }
  }

  if (stk.length === 0) {
    return true;
  } else {
    return false;
  }
}
