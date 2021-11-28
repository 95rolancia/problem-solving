console.log(solution('1000', 1));

function solution(number, k) {
  let deletedCnt = 0;
  let q = [];
  
  for (let i = 0; i < number.length; i++) {
    if (q.length === 0) {
      q.push(number[i]);
    } else {
      if (+q[q.length - 1] < +number[i]) {
        while (+q[q.length - 1] < +number[i]) {
          q.splice(q.length - 1, 1);
          deletedCnt++;
          if (deletedCnt === k) {
            for (let j = i + 1; j < number.length; j++) {
              q.push(number[j]);
            }
            return q.join("");
          }
        }
        q.push(number[i]);
      } else {
        q.push(number[i]);
      }
    }
  }
  return q.join("").substring(0, q.length - k)
}
