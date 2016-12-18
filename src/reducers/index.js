const gameState = (state = {
  plays: [],
  computerPlays: [],
  playersTurn: false,
  youLose: false,
  youWin: false,
  garbage: true
}, action) => {
  if (action.type === 'PUSH_PLAY') {
    console.log('push plays**********');
  }
  
};

export default gameState;