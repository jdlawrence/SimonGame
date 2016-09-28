import React, { Component } from 'react';

export default class Right extends Component {
  coolFunc() {
    console.log('inside cool');
  }

  clickBlue() {
    this.props.logColor('blue');
  }
  clickGreen() {
    console.log('green');
  }
  clickRed() {
    console.log('red');
  }
  clickYellow() {
    console.log('yellow');
  }
  render() {
    return (
      <h1>
      <svg width="200" height="200">
        <circle cx="125" cy="100" r="56" fill="black"/>
        <path onClick={this.clickGreen.bind(this)} d="M125 50 a 50 50, 0, 0, 0, -50 50
                l50 0 Z                 
        " stroke="black" fill="green"/>
        <path onClick={this.clickYellow.bind(this)} d="M75 100 a 50 50, 0, 0, 0, 50 50
                l0 -50 Z
        " stroke="black" fill="yellow"/>
        <path onClick={this.clickBlue.bind(this)} d="M125 150 a 50 50, 0, 0, 0, 50 -50 
                l-50 0 Z                 
        " stroke="black" fill="blue"/>
        <path onClick={this.clickRed.bind(this)} d="M175 100 a 50 50, 0, 0, 0, -50 -50 
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
