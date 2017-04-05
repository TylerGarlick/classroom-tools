import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import Thunk from 'redux-thunk';

import './index.css';
import Routes from './routes';
import Reducers from './reducers';

const history = createHistory();
const middleware = routerMiddleware(history);

const config = {
  apiKey: 'AIzaSyCiJwxNzY-6TFp_VIecqKxVAIqL_L2sjlA',
  authDomain: 'classroom-tools-f7a09.firebaseapp.com',
  databaseURL: 'https://classroom-tools-f7a09.firebaseio.com',
  projectId: 'classroom-tools-f7a09',
  storageBucket: 'classroom-tools-f7a09.appspot.com',
  messagingSenderId: '643004676545'
};

const store = createStore(
  Reducers,
  {},
  compose(
    applyMiddleware(
      Thunk.withExtraArgument(getFirebase)
    ),
    applyMiddleware(middleware),
    reactReduxFirebase(config, { userProfile: 'users', enableLogging: true })
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
