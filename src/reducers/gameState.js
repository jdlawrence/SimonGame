import {
  PUSH_HUMAN_PLAY,
  COMPARE_PLAYS,
  PUSH_COMP_PLAY,
  END_ROUND,
  CLEAR_STATE
} from '../actions';

import comparePlays from '../utils/comparePlays';

const initialState = {
  humanPlays: [],
  compPlays: [],
  dummyPlays: ['blue', 'red', 'green', 'yellow'],
  youLose: false,
  roundCount: 0
};

const gameState = (state = initialState, action) => {
  if (action.type === PUSH_HUMAN_PLAY) {
    return {
      ...state, 
      humanPlays: state.humanPlays.concat(action.color)
    };
  }
  else if (action.type === COMPARE_PLAYS) {
    if (comparePlays(state.compPlays, state.plays)) {
      return state;
    }
    else {
      return {
        ...state, youLose: true
      };
    }
  }
  else if (action.type === PUSH_COMP_PLAY) {
    return {
      ...state, 
      compPlays: state.compPlays.concat(action.color)
    };
  }
  else if (action.type === END_ROUND) {
    return {
      ...state,
      humanPlays: [],
      roundCount: state.roundCount + 1
    };
  }
  else if (action.type === CLEAR_STATE) {
    return {
      ...state, 
      humanPlays: [],
      compPlays: [],
      youLose: false,
      roundCount: 0
    };  
  } else {
    return state;
  }

};

export default gameState;