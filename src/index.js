import React                from                'react';
import {render}             from            'react-dom';
import { createStore, 
  applyMiddleware,
  compose }                 from                'redux';
import { Provider }         from          'react-redux';
import rootReducer          from           './reducers';
import { Router, 
  Route, 
  browserHistory, 
  IndexRoute }              from         'react-router';
import thunk                from          'redux-thunk';
import App                  from             './App.js';
import Left                 from            './Left.js';
import Right                from           './Right.js';
import Footer               from          './Footer.js';
import GameStatusContainer  from       './containers/GameStatusContainer.js';

// const store = createStore(rootReducer);
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
var initialState = {message: 'my initial state'};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(thunk)
  ));


class Index extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/left" component={Left}/>
          <Route path="/right" component={Right}/>
          <Route path="/gameStatus" component={GameStatusContainer}/>
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
