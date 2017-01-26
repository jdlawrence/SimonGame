import { connect } from 'react-redux';
import { pushPlay, comparePlays, startGame, clearState } from '../actions';
import GameStatus from '../components/GameStatus';

console.log('GameStatus: ', GameStatus);
const mapStateToProps = () => ({
  // a: 5
});

const mapDispatchToProps = (dispatch) => ({
  clickBlue: () => {
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
// const GameStatusContainer = connect(mapDispatchToProps)(GameStatus);

export default GameStatusContainer; 
