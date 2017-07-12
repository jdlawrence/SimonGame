import React, { Component } from 'react';
import ReactDOM from         'react-dom';

export default class Highscores extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
 
    return (
      <div >
        <h1>
            Highscores component
        </h1>
      </div>
    );
  }
}

Highscores.propTypes = {
  pushPlays: React.PropTypes.func,
  computerPlays: React.PropTypes.array
};
