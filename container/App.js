import React                from             'react';
import { Router, 
  Route, 
  browserHistory, 
  IndexRoute,
  Link }                    from      'react-router';
import Left                 from            './Left';
import Right                from           './Right';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        counter: 8
    };
  }
  increment(){
    this.setState({counter: this.state.counter + 1});
  }
  logColor(color) {
    console.log('color: ', color);
  }
  render () {
    return (
      
      <div> 
      Simon Game!
        <div>{this.state.counter}</div>
      <ul role="nav">
        <li><Link to="/left">Left</Link></li>
        <li><Link to="/right">Right</Link></li>
      </ul>
      {this.props.children && React.cloneElement(this.props.children, {
              increment: this.increment.bind(this), logColor: this.logColor.bind(this)
            })}
      </div>
    );
  }
}

      // {this.props.children}
