// Level 2 올바른 괄호

// 1. 배열 이용
function solution(s) {
  // 길이가 짝수가 아닐 때 or 첫 문자가 닫는 괄호일 때 올바른 괄호가 아님
  if (s.length % 2 !== 0 || arr[0] === ")") {
    return false;
  }

  const stk = [];
  for (const c of s) {
    if (c === "(") {
      stk.push(c);
    } else {
      if (stk.length === 0) {
        return false;
      }
      stk.pop();
    }
  }

  return stk.length === 0;
}

// 2. 스택의 원리 이용

function solution2(s) {
  // 길이가 짝수가 아닐 때 or 첫 문자가 닫는 괄호일 때 올바른 괄호가 아님
  if (s.length % 2 !== 0 || arr[0] === ")") {
    return false;
  }

  let count = 0;
  for (const c of s) {
    if (c === "(") {
      count++;
    } else {
      if (count === 0) {
        return false;
      }
      count--;
    }
  }

  return count === 0;
}
