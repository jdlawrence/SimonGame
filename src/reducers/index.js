const comparePlays = function(compPlays, humanPlays) {
  if (compPlays.length === 0 || humanPlays .length === 0) {
    return false;
  }
  for (var i = 0; i < humanPlays.length; i++) {
    if (compPlays[i] !== humanPlays[i]) {
      return false;
    }
  }
  return true;
};

const gameState = (state = {
  plays: [],
  computerPlays: ['yellow', 'blue'],
  youLose: false,
}, action) => {
  if (action.type === 'PUSH_PLAY') {
    return Object.assign({}, state, {plays: state.plays.concat(action.color)});
  }
  else if (action.type === 'COMPARE_PLAYS') {
    if (comparePlays(state.computerPlays, state.plays)) {
      return state;
    }
    else {
      return Object.assign({}, state, {youLose: true});
    }
  }
  else if (action.type === 'START_GAME') {
    console.log('my async action!!');
    return Object.assign({}, state, {computerPlays: state.computerPlays.concat(action.color)});
  }
  else if (action.type === 'END_ROUND') {
    console.log('ROUND_OVER!!!!!!!!!!!!!!!!!!!!!');
    return state;
  }

};

export default gameState;

