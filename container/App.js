import React                from             'react';
import { Router, 
  Route, 
  browserHistory, 
  IndexRoute,
  Link }                    from      'react-router';
import Left                 from            './Left';
import Right                from           './Right';
import async                from            'async';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        counter: 8,
        plays: [],
        computerPlays: ['blue', 'red', 'green', 'yellow', 'yellow', 'green', 'red', 'blue'],
        playersTurn: false,
        gameClock: null
    };
    this.generatePlays = this.generatePlays.bind(this);
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
    this.setState({plays: temp}, () => { console.log('plays: ', this.state.plays); });
  }
  startGame() {
    function delay(callback) {
      setTimeout( () => {
        callback();
      }, 1000); 
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
              computerPlays: this.state.computerPlays
            })}
      </div>
    );
  }
}

      // {this.props.children}
