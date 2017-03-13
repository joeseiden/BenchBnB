import { merge } from 'lodash';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const _defaultState = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {
        currentUser: action.currentUser
        });
    case RECEIVE_ERRORS:
      return merge({}, state, {
        currentUser: null,
        errors: action.errors
      });
    default:
      return state;
  }
};

export default SessionReducer;
