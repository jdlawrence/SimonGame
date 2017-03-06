import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import GameStatus from '../components/GameStatus';

const mapStateToProps = (state) => {
  return {
    QCState: state.QCState,
    gameState: state.gameState
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const GameStatusContainer = connect(mapStateToProps, mapDispatchToProps)(GameStatus);

export default GameStatusContainer; 
