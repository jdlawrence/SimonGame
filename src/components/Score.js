import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import request from 'request';

class Score extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // // componentDidMount() {
  // //   // request('/api', (error, response, body) => {
  // //   //   console.log('error:', error); // Print the error if one occurred
  // //   //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // //   //   console.log('body:', body); // Print the HTML for the Google homepage. 
  // //   // });
  // // }
  render() {

    return (
      <div className="score show-border">Score: {this.props.score}</div>
    );
  }
}

export default Score;