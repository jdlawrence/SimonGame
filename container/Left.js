import React, { Component } from 'react';

export default class Left extends Component {
  increment() {
    console.log('props inside Component: ', this.props);
    this.props.increment();
  }
  render() {
    return (
      <h1>Left side component
        {console.log('props: ', this.props)}
        <button onClick={this.increment.bind(this)}>Click to increment</button>
        </h1>
    );
  }
}
