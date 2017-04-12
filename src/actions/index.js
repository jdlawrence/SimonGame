export const TOGGLE_COLOR = 'TOGGLE_COLOR';
export const PUSH_COMP_PLAY = 'PUSH_COMP_PLAY';
export const PUSH_HUMAN_PLAY = 'PUSH_HUMAN_PLAY';
export const END_ROUND = 'END_ROUND';
export const CLEAR_STATE = 'CLEAR_STATE';
export const COMPARE_PLAYS = 'COMPARE_PLAYS';


export const toggleColor = (color) => {
  return {
    type: TOGGLE_COLOR,
    color
  };
};

export const flashQC = (color) => {
  return function (dispatch, getState) {
    dispatch(toggleColor(color));
    setTimeout(function() {
      dispatch(toggleColor(color)); 
    }, 300);
  }
}
export const playSequence = () => {
  // Since this action contains setTimeout and it's asynchronous
  // it must return function
  return function (dispatch, getState) {
    var compPlays = getState().gameState.compPlays;
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
  type: PUSH_COMP_PLAY,
  color: randColor
});
export const pushHumanPlay = (color) => ({
  type: PUSH_HUMAN_PLAY,
  color: color
});
export const comparePlays = () => ({
  type: COMPARE_PLAYS
});
export const endRound = () => ({
  type: END_ROUND
});
export const clearState = () => ({
  type: CLEAR_STATE
});
export const startGame = () => {
  return function (dispatch, getState) {
    // Reset all settings;
    dispatch(clearState());

    (function gameAction() {
      var plays = ['green', 'red', 'blue', 'yellow'];
      var randColor = plays[Math.floor(Math.random() * 4)];
      var roundCount = getState().gameState.roundCount;

      // Push a play for the computer
      dispatch(pushCompPlay(randColor));

      // Playback the sequence of computer plays
      dispatch(playSequence());

      // Wait some time for the human to play

      setTimeout(function () {

        // Compare plays
        dispatch(comparePlays());

        // Resets human plays back to 0 and increase roundCount
        dispatch(endRound());

        if (getState().gameState.youLose) {
          console.log('it\s over!!!: ');
        }
        else {
          gameAction();
        }
      }, roundCount * 1000 + 5000);

    })();
  };
};