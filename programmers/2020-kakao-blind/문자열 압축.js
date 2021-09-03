function solution(s) {
  let answer = s.length;
  for (let i = 1; i <= s.length / 2; i++) {
    let start = s.substr(0, i);
    let cnt = 1;
    let temp = '';

    for (let j = i; j < s.length; j += i) {
      if (start === s.substr(j, i)) {
        cnt++;
      } else {
        if (cnt === 1) cnt = '';
        temp += cnt + start;
        cnt = 1;
        start = s.substr(j, i);
      }
    }
    if (cnt >= 2) {
      temp += cnt + start;
    } else {
      temp += start;
    }
    console.log(temp);
    answer = Math.min(answer, temp.length);
  }
  return answer;
}
