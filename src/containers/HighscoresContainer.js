import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Highscores from '../components/Highscores';

const mapStateToProps = (state) => {
  return {
    dataService: state.dataService
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const HighscoresContainer = connect(mapStateToProps, mapDispatchToProps)(Highscores);

export default HighscoresContainer; 
