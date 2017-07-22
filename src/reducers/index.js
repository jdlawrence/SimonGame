import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import dataService from './dataService';
import gameState from './gameState';
import QCState from './QCReducer';

const rootReducer = combineReducers({ dataService, gameState, QCState,  routing } );

export default rootReducer;
