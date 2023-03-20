/**
 * 난이도 : Level 2
 * 키워드 : 구현, 해시맵
 * 풀이 :
 * 1. want, number를 조합해서 객체를 만든다.
 * 2. discount에서 앞에서부터 10개씩 끊어서 1에서 만든 객체와 비교
 */

function solution(want, number, discount) {
  const wantCounter = want.reduce(
    (acc, cur, i) => ({ ...acc, [cur]: number[i] }),
    {}
  );

  let answer = 0;
  for (let left = 0; left + 9 < discount.length; left += 1) {
    const target = counter(discount.slice(left, left + 10));
    if (checkIsSame(wantCounter, target)) {
      answer += 1;
    }
  }

  return answer;
}

function checkIsSame(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) return false;

  for (const [key1, value1] of Object.entries(a)) {
    if (!key1 in b || value1 !== b[key1]) return false;
  }
  return true;
}

function counter(arr) {
  const count = {};
  for (const elem of arr) {
    count[elem] = (count[elem] || 0) + 1;
  }
  return count;
}
