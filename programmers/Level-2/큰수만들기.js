// 1 <= number <= 1,000,000 -> O(n) or O(n log n)으로 풀어야 함

function solution(number, k) {
  let deletedCnt = 0;
  const stk = [];
  
  for(const nbr of number) {
      while (deletedCnt < k && stk[stk.length - 1] < nbr) {
          stk.pop();
          deletedCnt += 1;
      }
      stk.push(nbr);
  }
  
  while (deletedCnt < k) {
      stk.pop();
      deletedCnt += 1;
  }    

  return stk.join('');
}