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
        <path d="M10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/>
      </svg>
      Right side component</h1>
    );
  }
}
