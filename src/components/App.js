import React from 'react';
import ReactDOM from 'react-dom';

import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
  Link
} from 'react-router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app-container">
        <div className="simon">
          Simon Game
          <div role="nav" className="nav">
            <div className="nav-item"><Link to="/gamestatus">Play the game!</Link></div>
            <div className="nav-item"><Link to="/highscores"> Highscores</Link></div>
          </div>
          {this.props.children && React.cloneElement(this.props.children, {
          })}
        </div>
      </div>
    );
  }
}

