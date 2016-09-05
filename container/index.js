import React                from             'react';
import {render}             from         'react-dom';
import App                  from             './App';
import { Router, 
  Route, 
  browserHistory, 
  IndexRoute }              from      'react-router';
import Left                 from            './Left';
import Right                from           './Right';

// render(<Router>, document.getElementById('app'));

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/left" component={Left}/>
    <Route path="/right" component={Right}/>
  </Router>
), document.getElementById('app'));