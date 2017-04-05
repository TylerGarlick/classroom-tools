import ActionTypes from './types';

const userAddedToQueue = user => ({
  type: ActionTypes.USER_ADDED,
  user
});

export const addUserToQueue = user =>
  (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    firebase.push('queue', { user })
      .then(() => dispatch(userAddedToQueue(user)))
  };

const removeUserFromQueue = user => ({
  type: ActionTypes.REMOVE_USER,
  user
});