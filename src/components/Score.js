import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class Score extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="score show-border">
        <div>Score: {this.props.score}</div>
        <div>Game over? {'' + this.props.youLose}</div>
      </div>
    );
  }
}

export default Score;