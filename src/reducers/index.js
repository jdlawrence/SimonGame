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
}

const gameState = (state = {
  plays: [],
  computerPlays: [],
  playersTurn: false,
  youLose: false,
  youWin: false,
  garbage: true
}, action) => {
  if (action.type === 'PUSH_PLAY') {
    console.log('push plays**********', action.color);
    return {
      plays: [...state.plays, action.color],
      // plays: [1, 2, 3, 4],
      computerPlays: state.computerPlays,
      playersTurn: state.playersTurn,
      youLose: state.youLose,
      youWin: state.youWin,
      garbage: state.garbage
    };
  }
  
};

export default gameState;

