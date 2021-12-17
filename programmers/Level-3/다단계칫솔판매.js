function solution(enroll, referrals, sellers, amount) {
  let tree = {};

  referrals.forEach((referal, idx) => {
    if (referal === '-') {
      return;
    }

    tree[enroll[idx]] = referal;
  });

  const orderDict = {};
  enroll.forEach((v, idx) => {
    orderDict[v] = idx;
  });

  let answer = Array(enroll.length).fill(0);

  sellers.forEach((seller, idx) => {
    let curAmount = amount[idx] * 100;
    let next = tree[seller];

    while (true) {
      if (curAmount === 0) break;

      let reward = Math.floor(curAmount * 0.1);
      answer[orderDict[seller]] += curAmount - reward;

      if (next == undefined) break;

      seller = next;
      curAmount = reward;
      next = tree[next];
    }
  });

  return answer;
}
