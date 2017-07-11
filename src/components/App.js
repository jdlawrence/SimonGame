import React from 'react';
import ReactDOM from 'react-dom';

import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
  Link
} from 'react-router';
import Right from './Right';
import GameStatusContainer from '../containers/GameStatusContainer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plays: [],
      computerPlays: [],
      youLose: false,
    };
    this.comparePlays = this.comparePlays.bind(this);
  }
  comparePlays(compPlays, humanPlays) {
    if (compPlays.length === 0 || humanPlays.length === 0) {
      return false;
    }
    for (var i = 0; i < humanPlays.length; i++) {
      if (compPlays[i] !== humanPlays[i]) {
        return false;
      }
    }
    return true;
  }

  pushPlays(color) {
    var temp = this.state.plays.concat(color);
    this.setState({ plays: temp }, () => {

      // If the player plays don't match the computer plays, trigger youLose to true
      if (!this.comparePlays(this.state.computerPlays, this.state.plays)) {
        this.setState({ youLose: true });
      }
      console.log('comparePlays: ', this.comparePlays(this.state.computerPlays, this.state.plays));
    });
  }
  startGame() {
    var that = this;

    // Resets the game to a neutral state
    that.setState({
      youLose: false,
      computerPlays: [],
      plays: []
    }, function () {
      gameAction(0);
    });

    ReactDOM.findDOMNode(this.refs.child).focus();

    // 
    function gameAction(count) {
      // Push a random play to computerPlays
      var plays = ['green', 'red', 'blue', 'yellow'];
      var temp = that.state.computerPlays.concat(plays[Math.floor(Math.random() * 4)]);
      console.log('computerPlays: ', temp);
      that.setState({ computerPlays: temp }, () => {
        that.refs.child.seqStart();
      });
      setTimeout(() => {
        // If you plays don't match computer plays, you lose
        if (!that.comparePlays(that.state.computerPlays, that.state.plays)) {
          that.setState({ youLose: true });
        }

        // If plays do match computer plays, start a new round  
        else if (that.state.plays.length >= that.state.computerPlays.length) {
          that.setState({ plays: [] });
          gameAction(count + 1);
        }

        // If you don't push any plays, the game will end
        else {
          that.setState({ youLose: true });
        }
      }, 3000 + 1000 * count);
    }
  }
  render() {
    return (
      <div className="app-container">
        <div className="simon">
          Simon Game!
        <button onClick={this.startGame.bind(this)}>Start the Game!</button>
          {this.state.youLose ? <div>YOU LOSE</div> : null}
          <ul role="nav">
            <li><Link to="/right">Right</Link></li>
            <li><Link to="/gamestatus">GameStatus</Link></li>
          </ul>
          {this.props.children && React.cloneElement(this.props.children, {
            pushPlays: this.pushPlays.bind(this),
            computerPlays: this.state.computerPlays,
            ref: 'child',
            seq: this.state.sequence
          })}
        </div>
      </div>
    );
  }
}

