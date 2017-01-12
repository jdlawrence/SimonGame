import { connect } from 'react-redux';
import { pushPlay, comparePlays, startGame } from '../actions';
import GameStatus from '../components/GameStatus';

console.log('GameStatus: ', GameStatus);
const mapStateToProps = () => ({
  a: 5
});

const mapDispatchToProps = (dispatch) => ({
  clickBlue: () => {
    console.log('blue clicked');
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
    dispatch(startGame());
  }
});

const GameStatusContainer = connect(mapStateToProps, mapDispatchToProps)(GameStatus);

export default GameStatusContainer; 
