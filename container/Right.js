import React, { Component } from 'react';

export default class Left extends Component {
  render() {
    return (
      <h1>
      <svg>
        <circle cx={50} cy={50} r={10} fill="red" />
      </svg>
      Right side component</h1>
    );
  }
}
