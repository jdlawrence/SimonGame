import React from 'react';
import { connect } from 'react-redux';
import { pushPlay } from '../actions';

let Board = ( {clickBlue, clickGreen, clickYellow, clickRed} ) => {
  return (
    <div>
      <div onClick={clickBlue}>Blue</div>
      <div onClick={clickGreen}>Green</div>
      <div onClick={clickYellow}>Yellow</div>
      <div onClick={clickRed}>Red</div>
    </div>
    );
};

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
  }
});

Board = connect(mapStateToProps, mapDispatchToProps)(Board);
// Board = connect()(Board);

export default Board; 
