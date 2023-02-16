/**
 * 난이도 : 레벨 2
 * 장르 : 구현
 *
 * 풀이 :
 * 60 * 24 = 1,440 만큼 배열을 만들어서
 * 시작 시간 ~ 끝 시간 + 10 만큼 카운팅
 */

function solution(book_time) {
  const arr = Array(1440).fill(0);
  book_time.forEach(([start, end]) => fillArr(start, end, arr));
  return Math.max(...arr);
}

function fillArr(start, end, arr) {
  let [sHour, sMin] = start.split(":").map(Number);
  let [eHour, eMin] = end.split(":").map(Number);
  const s = 60 * sHour + sMin;
  const e = eHour * 60 + eMin + 10;
  //console.log(s, e);
  for (let i = s; i < e && i < 1440; i++) {
    arr[i]++;
  }
}
