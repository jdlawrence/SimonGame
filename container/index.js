import React                from             'react';
import {render}             from         'react-dom';
import App                  from             './App';
import { Router, 
  Route, 
  browserHistory, 
  IndexRoute }              from      'react-router';
import Left                 from            './Left';
import Right                from           './Right';
import Footer               from          './Footer';

// render(<Router>, document.getElementById('app'));

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/left" component={Left}/>
      <Route path="/right" component={Right}/>
    </Route>
    <Route path="/footer" component={Footer}/>
  </Router>
), document.getElementById('app'));