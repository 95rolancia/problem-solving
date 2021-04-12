/*
    프로그래머스 : 신규 아이디 추천
    난이도 : Level 1
    분류 : 구현, 정규 표현식 사용
*/

const solution = (new_id) => {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-\.]/g, "") // 2
    .replace(/\.+/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6
  const len = answer.length;
  return answer.padEnd(3, answer[len - 1]);
};
