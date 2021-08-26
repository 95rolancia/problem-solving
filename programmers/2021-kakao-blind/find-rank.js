function solution(infos, queries) {
  let answer = [];
  let infoDict = {};

  infos.forEach((info) => {
    const currentInfo = info.split(' ').slice(0, 5);
    const score = currentInfo[4];
    getSubsets(currentInfo.slice(0, 4), 4).forEach((subset) => {
      const cur = subset;
      infoDict[cur] ? infoDict[cur].push(+score) : (infoDict[cur] = [+score]);
    });
  });

  for (const key in infoDict) {
    infoDict[key].sort((a, b) => a - b);
  }

  queries.forEach((query) => {
    const cur = query.split(' and ');
    const [last, score] = cur[3].split(' ');
    const current = cur.slice(0, 3).join(' ') + ' ' + last;
    if (infoDict[current]) {
      let start = 0;
      let end = infoDict[current].length;
      while (start < end) {
        const mid = Math.floor((start + end) / 2);
        if (infoDict[current][mid] >= score) {
          end = mid;
        } else if (infoDict[current][mid] < score) {
          start = mid + 1;
        }
      }
      answer.push(infoDict[current].length - start);
    } else {
      answer.push(0);
    }
  });
  return answer;
}

function getSubsets(arr, arrLen) {
  const result = [];
  for (let i = 0; i < 1 << arrLen; i++) {
    let temp = '';
    for (let j = 0; j < arrLen; j++) {
      if ((i & (1 << j)) != 0) temp += arr[j] + ' ';
      else temp += '- ';
    }
    result.push(temp.slice(0, temp.length - 1));
  }
  return result;
}
