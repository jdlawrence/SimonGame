import React, { Component } from 'react';

export default class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {
      green: 0.5,
      red: 0.5,
      blue: 0.5,
      yellow: 0.5
    };
    // this.toggleHover = this.toggleHover.bind(this);
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
    setInterval( () => {
      if (this.state.green === 0.5) {
        this.setState({green: 1.0});
      }
      else {
        this.setState({green: 0.5});
      }
    }, 500);
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

      Right side component</h1>
    );
  }
}
