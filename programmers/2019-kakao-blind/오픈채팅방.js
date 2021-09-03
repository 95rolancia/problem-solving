function solution(records) {
  let action = [];
  let userInfo = {};
  let stateMapping = {
    Enter: '님이 들어왔습니다.',
    Leave: '님이 나갔습니다.',
  };
  records.forEach((recode) => {
    const [behavior, uid, nickname] = recode.split(' ');
    if (behavior !== 'Change') {
      action.push([behavior, uid]);
    }

    if (nickname) {
      userInfo[uid] = nickname;
    }
  });

  return action.map(([behavior, uid]) => {
    return `${userInfo[uid]}${stateMapping[behavior]}`;
  });
}
