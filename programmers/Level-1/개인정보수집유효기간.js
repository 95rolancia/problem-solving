function solution(todayStr, terms, privacies) {
  const answer = [];
  const todayObj = new Date(todayStr.replace(/\./g, "-"));
  const termMap = getTermMap(terms);

  privacies.forEach((privacy, idx) => {
    const [collectionDateStr, type] = privacy.split(" ");
    const collectionDateObj = new Date(collectionDateStr.replace(/\./g, "-"));
    const dueDateObj = plusMonthToDate(collectionDateObj, termMap.get(type));
    if (isExpired(dueDateObj, todayObj)) {
      answer.push(idx + 1);
    }
  });

  return answer;
}

function getTermMap(terms) {
  const result = new Map();
  for (const term of terms) {
    const [id, due] = term.split(" ");
    result.set(id, Number(due));
  }
  return result;
}

function plusMonthToDate(date, month) {
  return new Date(date.setMonth(date.getMonth() + month));
}

function isExpired(a, b) {
  if (a.getTime() > b.getTime()) {
    return false;
  }
  return true;
}
