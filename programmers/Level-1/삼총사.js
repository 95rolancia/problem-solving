// Level 1

function solution(number) {
  let answer = 0;
  let combs = getCombinations(number, 3);
  combs.forEach((comb) => {
    if (comb.reduce((acc, cur) => (acc += cur), 0) === 0) {
      answer++;
    }
  });

  return answer;
}

function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) {
    return arr.map((value) => [value]);
  }

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });
  return results;
}
