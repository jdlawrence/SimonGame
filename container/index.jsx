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


class Index extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/left" component={Left}/>
          <Route path="/right" component={Right}/>
        </Route>
        <Route path="/footer" component={Footer}/>
      </Router>
    );
  }
}

render(<Index/>, document.getElementById('app'));

