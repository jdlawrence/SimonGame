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
  playersTurn: false,
  youLose: false,
  garbage: true
}, action) => {
  if (action.type === 'PUSH_PLAY') {
    var result = {
      plays: [...state.plays, action.color],
      computerPlays: state.computerPlays,
      playersTurn: state.playersTurn,
      youLose: state.youLose,
      garbage: state.garbage
    };
    console.log('push plays**********', action.color);
    console.log('comp: ', result.computerPlays, 'plays', result.plays);
    console.log('compare: ', comparePlays(result.computerPlays, result.plays));
    return result; 
  }
  
};

export default gameState;

