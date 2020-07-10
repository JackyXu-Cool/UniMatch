/* eslint-disable indent */
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  username: null,
  loading: false,
  signup: false,
  error: null,
};

const authStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    username: action.username,
    signup: action.signup,
    loading: false,
    error: null,
  };
};

const authFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
