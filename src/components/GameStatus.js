import React, { PropTypes } from 'react';

const GameStatus = ( {clickBlue, clickGreen, clickYellow, clickRed, comparePlays, startGame} ) => {
  return (
    <div>
      <div onClick={clickBlue}>Blue</div>
      <div onClick={clickGreen}>Green</div>
      <div onClick={clickYellow}>Yellow</div>
      <div onClick={clickRed}>Red</div>
      <div onClick={comparePlays}>Compare</div>
      <div onClick={startGame}>Start the Game</div>
    </div>
    );
};

GameStatus.propTypes = {
  clickBlue: PropTypes.func.isRequired,
  clickRed: PropTypes.func.isRequired,
  clickGreen: PropTypes.func.isRequired,
  clickYellow: PropTypes.func.isRequired,
  comparePlays: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default GameStatus;