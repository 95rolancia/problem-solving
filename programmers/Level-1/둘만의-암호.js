function solution(s, skip, index) {
  let answer = "";

  Array.from(s).forEach((char) => {
    let cnt = 0;
    let curCharCode = char.charCodeAt(0);
    while (cnt < index) {
      curCharCode += 1;
      if (curCharCode === 123) curCharCode = 97; // '{'가 될 때 'a'로 변환
      if (!skip.includes(String.fromCharCode(curCharCode))) {
        cnt++;
      }
    }
    answer += String.fromCharCode(curCharCode);
  });

  return answer;
}

function solution2() {
  const alphbet = Array.from("abcdefghijklmnopqrstuvwxyz").filter(
    (char) => !skip.includes(char)
  );
  return Array.from(s)
    .map((char) => alphbet[(alphbet.indexOf(char) + index) % alphbet.length])
    .join("");
}
