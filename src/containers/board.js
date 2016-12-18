import React from 'react';
import { connect } from 'react-redux';
import { pushPlay } from '../actions';

let Board = ( {onClick} ) => {
  return (
    <div onClick={onClick}>hi Guy</div>
    );
};

const mapStateToProps = () => ({
  a: 5
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(pushPlay('blue'));
  }
});

Board = connect(mapStateToProps, mapDispatchToProps)(Board);
// Board = connect()(Board);

export default Board; 
