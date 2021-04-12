/*
    프로그래머스 : N진법 게임
    난이도 : Level 2
    분류 : 구현
*/
const solution = (n, t, m, p) => {
  let answer = "";
  let number = "";
  const max = m * t;
  for (let i = 0; i < max; i++) {
    number += i.toString(n);
  }
  // 자기 차례의 구하기
  answer = number.split("").filter((val, idx) => idx % m === p - 1);
  // join으로 합치고 소문자를 대문자로 바꾸기!
  answer = answer.slice(0, t).join("").toUpperCase();
  return answer;
};
