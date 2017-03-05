import { connect } from 'react-redux';
import { pushPlay, comparePlays, startGame, clearState } from '../actions';
import GameStatus from '../components/GameStatus';

const mapStateToProps = (state) => {
  console.log('**************', state);
  return {
    QCState: state.QCState,
    gameState: state.gameState
  };
};

const mapDispatchToProps = (dispatch) => ({
  clickBlue: () => {
    console.log('blue clicked!!');
    dispatch(pushPlay('blue')); 
  },
  clickGreen: () => {
    dispatch(pushPlay('green')); 
  },
  clickYellow: () => {
    dispatch(pushPlay('yellow')); 
  },
  clickRed: () => {
    dispatch(pushPlay('red')); 
  },
  comparePlays: () => {
    dispatch(comparePlays());
  },
  startGame: () => {
    dispatch(clearState());
    dispatch(startGame(0));
  }
});

const GameStatusContainer = connect(mapStateToProps, mapDispatchToProps)(GameStatus);

export default GameStatusContainer; 
