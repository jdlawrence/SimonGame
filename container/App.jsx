import React                from             'react';
import { Router, 
  Route, 
  browserHistory, 
  IndexRoute,
  Link }                    from      'react-router';
import Left                 from            './Left';
import Right                from           './Right';
import async                from            'async';

function comparePlays(arr1, arr2) {
  var len = arr1.length > arr2.length ? arr2.length : arr1.length; 
  for (var i = 0; i < len; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true;
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        counter: 8,
        plays: [],
        computerPlays: ['blue', 'red', 'green', 'green'],
        playersTurn: false,
        gameClock: null,
        youLose: false,
        youWin: false
    };
    this.generatePlays = this.generatePlays.bind(this);
    this.comparePlays = this.comparePlays.bind(this);
  }

  comparePlays(arr1, arr2) {
    var len = arr1.length > arr2.length ? arr2.length : arr1.length; 
    if (arr1.length === 0 || arr2.length === 0) {
      return false;
    }
    for (var i = 0; i < len; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  timesTwo() {
    this.setState({counter: this.state.counter * 2});
  }
  increment(){
    this.setState({counter: this.state.counter + 1});
  }
  logColor(color) {
    console.log('color: ', color);
  }
  generatePlays() {
    var plays = ['green', 'red', 'blue', 'yellow'];

    var gameClock = setInterval( () => {
      var index = Math.floor(Math.random() * 4);
      var temp = this.state.computerPlays.concat(plays[index]);
      this.setState({computerPlays: temp}, () => {
        console.log('computerPlays: ', this.state.computerPlays);
      });
    }, 500);

    this.setState({gameClock: gameClock});
    
    setTimeout(function() {
      clearInterval(gameClock);
    }, 2000);
  }
  stopClock() {
    clearInterval(this.state.gameClock);
  }
  pushPlays(color) {
    var temp = this.state.plays.concat(color);
    this.setState({plays: temp}, () => { 
      console.log('plays: ', this.state.plays); 
      console.log('computerPlays: ', this.state.computerPlays); 

      // If the player plays don't match the computer plays, trigger youLose to true
      if (!this.comparePlays(this.state.computerPlays, this.state.plays)) {
        this.setState({youLose: true});
      }
      console.log('comparePlays: ', this.comparePlays(this.state.computerPlays, this.state.plays));
    });
  }
  startGame() {
    var that = this;

    // Resets the game to a neutral state
    that.setState({
      youLose: false, 
      youWin: false,
      plays: []
    });

    function delay(callback) {
      setTimeout( () => {
        if (!that.comparePlays(that.state.computerPlays, that.state.plays)) {
          that.setState({youLose: true});
        }
        else {
          that.setState({youWin: true});
        }
        callback();
      }, 7000); 
    }
    function printGameOver(callback) {
      console.log('GAME OVER');
      callback();
    }

    async.series([delay, printGameOver]);
  }
  render () {
    return (
      
      <div> 
      Simon Game!
      <div>{this.state.counter}</div>
      <button onClick={this.startGame.bind(this)}>Start the Game!</button>
      { this.state.youLose ? <div>YOU LOSE</div> : null }
      { this.state.youWin ? <div>YOU WIN</div> : null }
      <button onClick={this.timesTwo.bind(this)}>timesTwo</button>
      <button onClick={this.generatePlays.bind(this)}>Start</button>
      <button onClick={this.stopClock.bind(this)}>Stop</button>
      <ul role="nav">
        <li><Link to="/left">Left</Link></li>
        <li><Link to="/right">Right</Link></li>
      </ul>
      {this.props.children && React.cloneElement(this.props.children, {
              increment: this.increment.bind(this), 
              logColor: this.logColor.bind(this),
              pushPlays: this.pushPlays.bind(this),
              counter: this.state.counter,
              computerPlays: this.state.computerPlays,
            })}
      </div>
    );
  }
}

      // {this.props.children}
