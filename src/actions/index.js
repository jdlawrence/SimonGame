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
  return function(dispatch, getState) {
    var plays = ['green', 'red', 'blue', 'yellow'];
    var randColor = plays[Math.floor(Math.random() * 4)];
    dispatch({
      type: 'START_GAME',
      color: randColor
    });
    setTimeout(function () {
      dispatch(comparePlays());
      dispatch(endRound());
      if (getState().youLose) {
        console.log('it\s over!!!: ');
      }
      else {
        dispatch(startGame(count+1));
      }
    }, count * 1000 + 5000);

  };
};