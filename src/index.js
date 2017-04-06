import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import Thunk from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Router from './router';
import Reducers from './reducers';
import Configuration from './configuration';

import './styles/global.css';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  Reducers,
  {},
  compose(
    applyMiddleware(
      Thunk.withExtraArgument(getFirebase)
    ),
    applyMiddleware(middleware),
    reactReduxFirebase(Configuration, { userProfile: 'users', enableLogging: false })
  )
);

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router />
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
