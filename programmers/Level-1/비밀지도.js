// 난이도 : Level 1
// 키워드 : 구현, 비트마스크, 2018카카오, 카카오

function solution(n, arr1, arr2) {
  const map = arr1.map((row, i) => row | arr2[i]); // 합연산
  return map.map(
    (v) =>
      v
        .toString(2) // 2진수 변환
        .padStart(n, "0") // 비어있는 곳 0으로 채워넣기
        .replace(/0|1/g, (a) => (a === "1" ? "#" : " ")) // 0이면 공백 1이면 #으로 치환
  );
}
