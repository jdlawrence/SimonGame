const comparePlays = function(compPlays, humanPlays) {
  if (compPlays.length === 0 || humanPlays.length === 0 || compPlays.length !== humanPlays.length) {
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
  computerPlays: [],
  youLose: false,
  roundCount: 0
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
    return Object.assign({}, state, {computerPlays: state.computerPlays.concat(action.color)});
  }
  else if (action.type === 'END_ROUND') {
    return Object.assign({}, state, {
      plays: [],
      roundCount: state.roundCount + 1
    });
  }
  else if (action.type === 'CLEAR_STATE') {
    return {
      plays: [],
      computerPlays: [],
      youLose: false,
      roundCount: 0
    };  
  }
};

export default gameState;

