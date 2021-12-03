// https://programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  var answer = [];
  let deletedZeroCnt = 0;
  let tempStr = s;
  let transformCnt = 0;

  while (tempStr !== '1') {
    const [newStr, zeroCnt] = binaryTransform(tempStr);
    tempStr = newStr;
    deletedZeroCnt += zeroCnt;
    transformCnt++;
  }

  return [transformCnt, deletedZeroCnt];
}

function binaryTransform(binaryStr) {
  const binaryStrLength = binaryStr.length;
  const transFormedBinaryStr = binaryStr.replace(/0/g, '');

  return [transFormedBinaryStr.length.toString(2), binaryStrLength - transFormedBinaryStr.length];
}
