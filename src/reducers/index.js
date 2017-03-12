import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import QCState from './QCReducer';
import gameState from './gameState';

const rootReducer = combineReducers({ gameState, QCState, routing } );

export default rootReducer;
