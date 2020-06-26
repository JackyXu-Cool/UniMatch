/* eslint-disable indent */
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  colleges: [],
  loading: false,
  error: null,
};

const fetchCollegesStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const fetchCollegeSuccess = (state, action) => {
  return {
    ...state,
    colleges: action.colleges,
    loading: false,
    error: null,
  };
};

const fetchCollegeFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COLLEGES_START:
      return fetchCollegesStart(state, action);
    case actionTypes.FETCH_COLLEGES_SUCCESS:
      return fetchCollegeSuccess(state, action);
    case actionTypes.FETCH_COLLEGES_FAIL:
      return fetchCollegeFail(state, action);
    default:
      return state;
  }
};

export default reducer;
