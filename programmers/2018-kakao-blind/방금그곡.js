function solution(m, musicinfos) {
  let candidate = [];
  
  musicinfos.forEach(musicinfo => {
      const [start, end, title, info] = musicinfo.split(",");
      const transInfo = transformSharp(info);
      let temp = '';     
      for(let i = 0; i < getTimeDiff(start, end); i++) {
          temp += transInfo[i % transInfo.length];
      }

      if(temp.indexOf(transformSharp(m)) >= 0) {
          candidate.push([title, getTimeDiff(start, end)]);
      }
  })
  
  if(candidate.length === 0) return '(None)';
  else if(candidate.length === 1) return candidate[0][0];
  else {
      candidate.sort((a, b) => b[1] - a[1]);
      return candidate[0][0]
  }
}

function transformSharp(info) {
      // let result = '';
    // for(let i = 0; i < info.length; i++) {
    //     if(info[i + 1] === '#') {
    //         if(info[i] === 'C') {
    //             result += '1'
    //         } else if(info[i] === 'D') {
    //             result += '2'
    //         } else if(info[i] === 'F') {
    //             result += '3'
    //         } else if(info[i] === 'G') {
    //             result += '4'
    //         } else if(info[i] === 'A') {
    //             result += '5'
    //         }
    //         i++;
    //     } else {
    //         result += info[i]
    //     }
    // }
    // return result;
  return info.replace(/[A-Z]#/g, info => info[0].toLowerCase())
}

function getTimeDiff(start, end) {
  const [startHour, startMin] = start.split(":").map(Number);
  const [endHour, endMin] = end.split(":").map(Number)
  
  if(endMin >= startMin) {
      return 60 * (endHour - startHour) + endMin - startMin
  } else {
      return 60 * (endHour - 1 - startHour) + (60 - startMin) + endMin
  }
}