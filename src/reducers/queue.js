import ActionTypes from '../actions/types';

export default (state = [], action) => {

  switch (action.type) {
    case ActionTypes.USER_ADDED:
      return [...state, action.user];
    case ActionTypes.REMOVE_USER:
      return [...state.filter(u => u.id !== action.user.id)];
  }

  return state;
}