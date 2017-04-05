import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { firebaseStateReducer as firebase} from 'react-redux-firebase';

import queue from './queue';

export default combineReducers({
  queue,
  router,
  firebase
});