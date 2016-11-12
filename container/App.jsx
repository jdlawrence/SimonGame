import React                from             'react';
import { Router, 
  Route, 
  browserHistory, 
  IndexRoute,
  Link }                    from      'react-router';
import Left                 from            './Left.jsx';
import Right                from           './Right.jsx';
import async                from            'async';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        counter: 8,
        plays: [],
        // computerPlays: ['blue', 'red', 'green', 'green'],
        computerPlays: [],
        playersTurn: false,
        gameClock: null,
        youLose: false,
        youWin: false
    };
    this.generatePlays = this.generatePlays.bind(this);
    this.comparePlays = this.comparePlays.bind(this);
  }
  // 
  comparePlays(compPlays, humanPlays) {
    if (compPlays.length === 0 || humanPlays .length === 0) {
      return false;
    }
    for (var i = 0; i < humanPlays.length; i++) {
      if (compPlays[i] !== humanPlays[i]) {
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

      // If the player plays don't match the computer plays, trigger youLose to true
      if (!this.comparePlays(this.state.computerPlays, this.state.plays)) {
        this.setState({youWin: false});
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
      computerPlays: [],
      plays: []
    }, function() {
      delay( () => {});
    });

    function delay(callback) {
      // Push a random play to computerPlays
      var plays = ['green', 'red', 'blue', 'yellow'];
      var temp = that.state.computerPlays.concat(plays[Math.floor(Math.random() * 4)]);
      console.log('computerPlays: ', temp);
      that.setState({computerPlays: temp});
      setTimeout( () => {
        if (!that.comparePlays(that.state.computerPlays, that.state.plays)  
          ) {
          that.setState({youWin: false}); 
          that.setState({youLose: true});
        }
          
        else if (that.state.plays.length >= that.state.computerPlays.length) {
          that.setState({plays: []});
          delay( () => {});
        }
        else {
          that.setState({youWin: false}); 
          that.setState({youLose: true}); 
        }
        callback();
      }, 7000); 
    }
    function printGameOver(callback) {
      console.log('GAME OVER');
      callback();
    }
    // delay( () => {});
    // async.series([delay, printGameOver]);
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
