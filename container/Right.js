import React, { Component } from 'react';

export default class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {
      green: 0.5,
      red: false,
      blue: false,
      yellow: false
    };
    // this.toggleHover = this.toggleHover.bind(this);
  }
  toggleHover(color) {
    console.log('color*******************: ', color);
    this.setState({green: 1.0});
  }
  toggleOn(color) {
    console.log('color*******************: ', color);
    this.setState({green: 1.0});
  }
  toggleOff(color) {
    console.log('color*******************: ', color);
    this.setState({green: 0.5});
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
    var buttonStyle = {
      opacity: 0.5
    };
    // if (this.state.green) {
    //   buttonStyle = {
    //     opacity: 1.0
    //   };
    // }
    // else {
    //   buttonStyle = {
    //     opacity: 0.5
    //   };
    // }

    return (
      <h1>
      <svg width="200" height="200">
        <circle cx="125" cy="100" r="56" fill="black"/>
        <path style={greenStyle} onClick={this.clickGreen.bind(this)} 
          onMouseEnter={() => this.toggleOn('green')} 
          onMouseLeave={() => this.toggleOff('green')} 
          d="M125 50 a 50 50, 0, 0, 0, -50 50
                l50 0 Z                 
        " stroke="black" fill="green"/>
        <path style={buttonStyle}
        onClick={this.clickYellow.bind(this)} 
        onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}
        d="M75 100 a 50 50, 0, 0, 0, 50 50
                l0 -50 Z
        " stroke="black" fill="yellow"/>
        <path style={buttonStyle} 
        onClick={this.clickBlue.bind(this)} 
        onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}
        d="M125 150 a 50 50, 0, 0, 0, 50 -50 
                l-50 0 Z                 
        " stroke="black" fill="blue"/>
        <path style={buttonStyle}
        onClick={this.clickRed.bind(this)} 
        onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}
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
