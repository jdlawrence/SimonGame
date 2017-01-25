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

export const startGame = (count) => {
  return function(dispatch, getState) {
    var plays = ['green', 'red', 'blue', 'yellow'];
    var randColor = plays[Math.floor(Math.random() * 4)];
    dispatch({
      type: 'START_GAME',
      // color: randColor
      color: 'green'
    });
    setTimeout(function () {
      dispatch(endRound());
      dispatch(comparePlays());
      if (getState().youLose) {
        console.log('it\s over!!!: ');
      }
      else {
        dispatch(startGame(count+1));
      }
    }, count * 2000);

  };
};