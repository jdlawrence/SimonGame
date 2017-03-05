import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import App from './App.js';
import Right from './Right.js';
import GameStatusContainer from './containers/GameStatusContainer.js';
import store, { history } from './store';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/right" component={Right} />
        <Route path="/gameStatus" component={GameStatusContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'));
