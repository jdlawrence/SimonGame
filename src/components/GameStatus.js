import React, { Component, PropTypes } from 'react';
import ReactDOM from         'react-dom';
import GameBoard from './GameBoard'; 

class GameStatus extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div> 
        <GameBoard/>
      </div>
    );
  }


}

GameStatus.propTypes = {
  clickBlue: PropTypes.func.isRequired,
  clickRed: PropTypes.func.isRequired,
  clickGreen: PropTypes.func.isRequired,
  clickYellow: PropTypes.func.isRequired,
  comparePlays: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default GameStatus;
