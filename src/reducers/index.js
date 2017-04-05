import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import queue from './queue';

export default combineReducers({
  queue,
  router
});