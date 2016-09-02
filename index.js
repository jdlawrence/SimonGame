import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello Rdsfdsfeact!</p>;
  }
}

render(<App/>, document.getElementById('app'));

// document.write('on the doc');
// console.log('here**************: ');