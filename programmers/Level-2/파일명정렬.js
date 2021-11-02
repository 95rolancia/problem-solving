function solution(files) {
  function compare(a, b) {
    const matchA = a.match(/(\D*)([0-9]*)/i);
    const matchB = b.match(/(\D*)([0-9]*)/i);

    const filenameA = matchA[1].toLowerCase();
    const filenameB = matchB[1].toLowerCase();

    const compareNumber = filenameA.localeCompare(filenameB);

    return compareNumber === 0 ? +matchA[2] - +matchB[2] : compareNumber;
  }
  return files.sort(compare);
}
