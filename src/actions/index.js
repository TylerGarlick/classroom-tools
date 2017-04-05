import ActionTypes from './types';

const addUserToQueue = user => ({
  type: ActionTypes.ADD_USER,
  user
});

const removeUserFromQueue = user => ({
  type: ActionTypes.REMOVE_USER,
  user
});