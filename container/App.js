import React                from             'react';
import { Router, 
  Route, 
  browserHistory, 
  IndexRoute,
  Link }                    from      'react-router';
import Left                 from            './Left';
import Right                from           './Right';

export default class App extends React.Component {
  render () {
    return (
      
      <p> 
      Simon Game!
      <ul role="nav">
        <li><Link to="/left">Left</Link></li>
        <li><Link to="/right">Right</Link></li>
      </ul>
      {this.props.children}
      </p>
    );
  }
}

