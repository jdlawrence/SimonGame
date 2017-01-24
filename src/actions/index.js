export const pushPlay = (color) => ({
  type: 'PUSH_PLAY',
  color: color
});

export const comparePlays = () => ({
  type: 'COMPARE_PLAYS'
});

export const startGame = (count) => {
  return function(dispatch) {
    var plays = ['green', 'red', 'blue', 'yellow'];
    var randColor = plays[Math.floor(Math.random() * 4)];
    dispatch({
      type: 'START_GAME',
      color: randColor
    });
    setTimeout(function () {
      dispatch({
        type: 'END_GAME'
      });
    }, count * 500);

  };
};