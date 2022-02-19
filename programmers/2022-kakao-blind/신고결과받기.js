// 신고 결과 받기

function solution(id_list, report, k) {
  const answer = new Array(id_list.length).fill(0);
  const idxDict = {};

  id_list.forEach((id, idx) => {
    idxDict[id] = idx;
  });

  const dict = {};

  report.forEach((r) => {
    const [a, b] = r.split(' ');
    dict[b] ? dict[b].add(a) : (dict[b] = new Set([a]));
  });

  for (const key in dict) {
    const arr = [...dict[key]];
    if (arr.length >= k) {
      arr.forEach((a) => {
        answer[idxDict[a]]++;
      });
    }
  }

  return answer;
}
