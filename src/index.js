import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

// Import CSS
import css from './styles/style.css';

import App from './components/App.js';
import Highscores from './components/Highscores.js';
import GameStatusContainer from './containers/GameStatusContainer';
import store, { history } from './store';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/gameStatus" component={GameStatusContainer} />
        <Route path="/highscores" component={Highscores} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'));
