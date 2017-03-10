import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import QCState from './QCReducer';

const comparePlays = function(compPlays, humanPlays) {
  if (compPlays.length === 0 || humanPlays.length === 0 || compPlays.length !== humanPlays.length) {
    return false;
  }
  for (var i = 0; i < humanPlays.length; i++) {
    if (compPlays[i] !== humanPlays[i]) {
      return false;
    }
  }
  return true;
};

const gameState = (state = {
  plays: [],
  computerPlays: [],
  dummyPlays: ['blue', 'red', 'green', 'yellow'],
  youLose: false,
  roundCount: 0
}, action) => {
  if (action.type === 'PUSH_PLAY') {
    return {
      ...state, 
      plays: state.plays.concat(action.color)
    };
  }
  else if (action.type === 'COMPARE_PLAYS') {
    if (comparePlays(state.computerPlays, state.plays)) {
      return state;
    }
    else {
      return {
        ...state, youLose: true
      };
    }
  }
  else if (action.type === 'PUSH_COMP_PLAY') {
    console.log('start');
    return {
      ...state, 
      computerPlays: state.computerPlays.concat(action.color)
    };
  }
  else if (action.type === 'END_ROUND') {
    return {
      ...state,
      plays: [],
      roundCount: state.roundCount + 1
    };
  }
  else if (action.type === 'CLEAR_STATE') {
    return {
      ...state, 
      plays: [],
      computerPlays: [],
      youLose: false,
      roundCount: 0
    };  
  } else {
    return state;
  }

};

const rootReducer = combineReducers({ gameState, QCState, routing } );

export default rootReducer;
