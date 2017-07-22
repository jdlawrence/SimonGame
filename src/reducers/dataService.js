import {
  START_FETCH,
  FETCH_SCORES_SUCCESS,
  FETCH_SCORES_FAILURE,
} from '../actions';


const initialState = {
  isSending: false,
  scores: [],
};

const dataService = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCH:
      return {
        ...state,
        isSending: true
      }
    case FETCH_SCORES_SUCCESS:
      console.log('score', action.scores);
      return {
        ...state,
        isSending: false,
        scores: action.scores
      }
    case FETCH_SCORES_FAILURE:
      return {
        ...state,
        isSending: false,
        scores: action.scores
      }
    default:
      return state
  }
};


export default dataService