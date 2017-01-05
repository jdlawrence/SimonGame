import React                from                'react';
import {render}             from            'react-dom';
import { createStore }      from                'redux';
import { Provider }         from          'react-redux';
import gameState            from           './reducers';
import { Router, 
  Route, 
  browserHistory, 
  IndexRoute }              from         'react-router';
import App                  from             './App.js';
import Left                 from            './Left.js';
import Right                from           './Right.js';
import Footer               from          './Footer.js';

console.log('store****************:', gameState);

// const store = createStore(gameState);
const store = createStore(gameState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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

render(<Provider store={store}>
         <Index/>
       </Provider>, 
       document.getElementById('app'));
