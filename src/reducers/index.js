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

// var plays = ['green', 'red', 'blue', 'yellow'];
// var temp = that.state.computerPlays.concat(plays[Math.floor(Math.random() * 4)]);

const gameState = (state = {
  plays: [],
  computerPlays: ['yellow', 'blue'],
  youLose: false,
}, action) => {
  if (action.type === 'PUSH_PLAY') {
    var result = {
      plays: [...state.plays, action.color],
      computerPlays: state.computerPlays,
      youLose: state.youLose,
    };
    console.log('push plays**********', action.color);
    console.log('comp: ', result.computerPlays, 'plays', result.plays);
    console.log('compare: ', comparePlays(result.computerPlays, result.plays));
    if (comparePlays(result.computerPlays, result.plays)) {
      // return result;
      return Object.assign({}, state, {plays: state.plays.concat(action.color)});
    }
    else {
      // return Object.assign({}, result, {youLose: true});
      return Object.assign({}, state, {youLose: true});
    }
  }
  else if (action.type === 'ADD_COMP_PLAY') {

  }
  
};

export default gameState;

