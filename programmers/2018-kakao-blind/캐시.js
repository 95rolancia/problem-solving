solution(3, [
  'Jeju',
  'Pangyo',
  'Seoul',
  'NewYork',
  'LA',
  'Jeju',
  'Pangyo',
  'Seoul',
  'NewYork',
  'LA',
]);
let refer = 0;
function solution(cacheSize, cities) {
  let answer = 0;
  let cache = Array.from({ length: cacheSize }, () => new Array(2).fill(-1));

  cities.forEach((city) => {
    if (accessCache(cache, city)) {
      answer += 1;
    } else {
      answer += 5;
      let targetIdx = -1;
      let targetValue = Number.MAX_SAFE_INTERGER;
      for (let i = 0; i < cacheSize; i++) {
        if (targetValue > cache[i][1]) {
          targetIdx = i;
          targetValue = cache[i][1];
        }
      }

      cache[targetIdx] = [city.toUpperCase(), refer++];
    }
    console.log(cache, answer);
  });
  return answer;
}

function accessCache(cache, target) {
  for (let i = 0; i < cache.length; i++) {
    if (target === cache[i][0]) {
      cache[i][1] = refer++;
      return true;
    }
  }
  return false;
}
