function solution(msg) {
  const answer = [];
  const dict = [];
  for (let i = 0; i < 26; i++) {
    dict.push(String.fromCharCode(i + 65));
  }

  let curIdx = 0;
  let curSize = 1;
  // const curWord = msg.slice(curIdx, curIdx + curSize);
  // console.log(curWord);
  // console.log(dict.includes(msg.slice(curIdx, curIdx + curSize)));
  while (curIdx < msg.length) {
    while (curIdx + curSize <= msg.length) {
      if (dict.includes(msg.slice(curIdx, curIdx + curSize))) {
        curSize++;
      } else {
        if (!dict.includes(msg.slice(curIdx, curIdx + curSize))) {
          dict.push(msg.slice(curIdx, curIdx + curSize));
        }
        break;
      }
    }

    answer.push(dict.findIndex((e) => e === msg.slice(curIdx, curIdx + curSize - 1)) + 1);
    if (curIdx + curSize - 1 >= msg.length) {
      curIdx += curSize;
    } else {
      curIdx += curSize - 1;
    }

    curSize = 1;
  }

  return answer;
}

console.log(solution('KAKAO'));
console.log(solution('ABABABABABABABAB'));
