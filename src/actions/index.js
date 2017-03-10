export const toggleColor = (color) => {
  return {
    type: 'TOGGLE_COLOR',
    color
  };
};

export const playSequence = () => {
  // Since this action contains setTimeout and it's asynchronous
  // it must return function
  return function (dispatch, getState) {
    var compPlays = getState().gameState.dummyPlays;
    // var compPlays = getState();
    // console.log('state', compPlays.gameState);
    for (let i = 0; i < compPlays.length; i++) {
      setTimeout(() => {
        // Asynchronous action must be dispatched
        dispatch(toggleColor(compPlays[i]));
        setTimeout(() => {
          dispatch(toggleColor(compPlays[i]));
        }, 300);
      }, 600 * i);
    }
  };
};
export const pushCompPlay = (randColor) => ({
  type: 'PUSH_COMP_PLAY',
  color: randColor
});
export const pushPlay = (color) => ({
  type: 'PUSH_PLAY',
  color: color
});
export const comparePlays = () => ({
  type: 'COMPARE_PLAYS'
});
export const endRound = () => ({
  type: 'END_ROUND'
});
export const clearState = () => ({
  type: 'CLEAR_STATE'
});
export const startGame = (count) => {
  return function (dispatch, getState) {
    var plays = ['green', 'red', 'blue', 'yellow'];
    var randColor = plays[Math.floor(Math.random() * 4)];
    
    // Reset all settings;
    dispatch(clearState());

    // Push a play for the computer
    dispatch(pushCompPlay(randColor));

    // Playback the sequence of computer plays
    dispatch(playSequence());

    // Wait some time for the human to play

    setTimeout(function () {
      dispatch(comparePlays());
      // dispatch(endRound());
      // if (getState().youLose) {
      //   console.log('it\s over!!!: ');
      // }
      // else {
      //   dispatch(startGame(count + 1));
      // }
    }, count * 1000 + 5000);

  };
};