import React, { Component, PropTypes } from 'react';
import ReactDOM from         'react-dom';
import GameBoard from './GameBoard'; 

class GameStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      green: 0.5,
      red: 0.5,
      blue: 0.5,
      yellow: 0.5,
    };
  }
   componentDidMount() {
    console.log('refs', this.refs.main);
    ReactDOM.findDOMNode(this.refs.main).focus();
  }
  toggleOn(color) {
    switch(color) {
      case 'green':
        this.setState({green: 1.0});
        break;
      case 'yellow':
        this.setState({yellow: 1.0});
        break;
      case 'blue':
        this.setState({blue: 1.0});
        break;
      case 'red':
        this.setState({red: 1.0});
        break;    
    }
  }
  toggleOff(color) {
    switch(color) {
      case 'green':
        this.setState({green: 0.5});
        break;
      case 'yellow':
        this.setState({yellow: 0.5});
        break;
      case 'blue':
        this.setState({blue: 0.5});
        break;
      case 'red':
        this.setState({red: 0.5});
        break;    
    }
  }
  seqStart() {
    for (let i = 0; i < this.props.computerPlays.length; i++) {
      setTimeout( () => {
        var newState = {}, oldState = {};
        newState[this.props.computerPlays[i]] = 1.0;
        oldState[this.props.computerPlays[i]] = 0.5;
        this.setState(newState);
        setTimeout( () => {
          this.setState(oldState);
        }, 300);
      }, i * 500);
    }
  }
  clickBlue() {
    this.props.pushPlays('blue');
  }
  clickGreen() {
    this.props.pushPlays('green');
  }
  clickRed() {
    this.props.pushPlays('red');
  }
  clickYellow() {
    this.props.pushPlays('yellow');
  }
  handleKey(e) {
    console.log('handle Key pressed', e.charCode);
    switch (e.charCode) {
      case 114:
        console.log('this********: ', this.clickRed);
        this.clickRed();
        // alert(this);
        break;
      case 103:
        console.log('this********: ', this.clickGreen);
        this.clickGreen();
        // alert(this);
        break;
      case 98:
        console.log('this********: ', this.clickBlue);
        this.clickBlue();
        // alert(this);
        break;
      case 121:
        console.log('this********: ', this.clickYellow);
        this.clickYellow();
        // alert(this);
        break;
    }
  }
  render() {
    var greenStyle = {
      opacity: this.state.green
    };
    var yellowStyle = {
      opacity: this.state.yellow
    };
    var blueStyle = {
      opacity: this.state.blue
    };
    var redStyle = {
      opacity: this.state.red
    };

    return (
      <div onKeyPress={this.handleKey.bind(this)} tabIndex="1" ref="main">
        <GameBoard/>
        <h1>
          <button onClick={this.seqStart.bind(this)}>seqStart</button>
          <svg width="200" height="200">
            <circle cx="125" cy="100" r="56" fill="black"/>
            <path style={greenStyle} onClick={this.clickGreen.bind(this)} 
              onMouseEnter={() => this.toggleOn('green')} 
              onMouseLeave={() => this.toggleOff('green')} 
              d="M125 50 a 50 50, 0, 0, 0, -50 50
                    l50 0 Z                 
            " stroke="black" fill="green"/>
            <path style={yellowStyle} onClick={this.clickYellow.bind(this)} 
              onMouseEnter={() => this.toggleOn('yellow')} 
              onMouseLeave={() => this.toggleOff('yellow')} 
            d="M75 100 a 50 50, 0, 0, 0, 50 50
                    l0 -50 Z
            " stroke="black" fill="yellow"/>
            <path style={blueStyle} onClick={this.clickBlue.bind(this)} 
              onMouseEnter={() => this.toggleOn('blue')} 
              onMouseLeave={() => this.toggleOff('blue')} 
            d="M125 150 a 50 50, 0, 0, 0, 50 -50 
                    l-50 0 Z                 
            " stroke="black" fill="blue"/>
            <path style={redStyle} onClick={this.clickRed.bind(this)} 
              onMouseEnter={() => this.toggleOn('red')} 
              onMouseLeave={() => this.toggleOff('red')} 
            d="M175 100 a 50 50, 0, 0, 0, -50 -50 
                    l0 50 Z                 
            " stroke="black" fill="red"/>
            <circle cx="125" cy="100" r="26" fill="black"/>
            <path d="M125 50 l0 100" stroke="black" strokeWidth="8" />
            <path d="M75 100 l100 0" stroke="black" strokeWidth="8" />
            <circle cx="125" cy="100" r="19" fill="grey"/>
          </svg>

            Right side component
        </h1>
      </div>
    );
  }


}

GameStatus.propTypes = {
  clickBlue: PropTypes.func.isRequired,
  clickRed: PropTypes.func.isRequired,
  clickGreen: PropTypes.func.isRequired,
  clickYellow: PropTypes.func.isRequired,
  comparePlays: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default GameStatus;
