import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

let Board = ( {clickBlue, clickGreen, clickYellow, clickRed, comparePlays, startGame} ) => {
  return (
    <div>
      <div onClick={clickBlue}>Blue</div>
      <div onClick={clickGreen}>Green</div>
      <div onClick={clickYellow}>Yellow</div>
      <div onClick={clickRed}>Red</div>
      <div onClick={comparePlays}>Compare</div>
      <div onClick={startGame}>Compare</div>
    </div>
    );
}
const mapStateToProps = () => ({
  a: 5
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
    dispatch(startGame());
  }
});

Board = connect(mapStateToProps, mapDispatchToProps)(Board);

export default Board; 
