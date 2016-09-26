import React, { Component } from 'react';

export default class Left extends Component {
  coolFunc() {
    console.log('inside cool');
  }
  render() {
    return (
      <h1>
      <svg width="200" height="200">
        <circle cx={50} cy={50} r={20} fill="black" />
        <circle onClick={this.coolFunc.bind(this)} cx={50} cy={50} r={10} fill="red" />
        <path d="m10 10 l 20 20"/>
        <circle cx={30} cy={30} r={20} fill="black" />
        <path d="M125 50 a 50 50, 0, 0, 0, -50 50
                l50 0 Z                 
        " stroke="black" fill="blue"/>
        <path d="M75 100 a 50 50, 0, 0, 0, 50 50
                l0 -50 Z
        " stroke="black" fill="red"/>
        <path d="M125 150 a 50 50, 0, 0, 0, 50 -50 
                l-50 0 Z                 
        " stroke="black" fill="green"/>
        <path d="M175 100 a 50 50, 0, 0, 0, -50 -50 
                l0 50 Z                 
        " stroke="black" fill="yellow"/>
      </svg>
      Right side component</h1>
    );
  }
}
