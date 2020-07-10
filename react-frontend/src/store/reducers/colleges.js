/* eslint-disable indent */
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  page: 1,
  colleges: [
    {
      rank: 1,
      name: "徐大王",
      state: "GA",
      enrollment: "2019",
      admission_rate: 1,
    },
    {
      rank: 1,
      name: "徐大王",
      state: "GA",
      enrollment: "2019",
      admission_rate: 1,
    },
    {
      rank: 1,
      name: "徐大王",
      state: "GA",
      enrollment: "2019",
      admission_rate: 1,
    },
    {
      rank: 1,
      name: "徐大王",
      state: "GA",
      enrollment: "2019",
      admission_rate: 1,
    },
    {
      rank: 1,
      name: "徐大王",
      state: "GA",
      enrollment: "2019",
      admission_rate: 1,
    },
    {
      rank: 1,
      name: "徐大王",
      state: "GA",
      enrollment: "2019",
      admission_rate: 1,
    },
  ],
  college: null,
  loading: false,
  error: null,
};

const fetchCollegeStart = (state = initialState, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const fetchCollegeSuccess = (state, action) => {
  return {
    ...state,
    college: action.college,
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

const fetchCollegesStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const fetchCollegesSuccess = (state, action) => {
  return {
    ...state,
    colleges: action.colleges,
    loading: false,
    error: null,
  };
};

const fetchCollegesFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
};

const switchPage = (state, action) => {
  return {
    ...state,
    page: action.page,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COLLEGE_START:
      return fetchCollegeStart(state, action);
    case actionTypes.FETCH_COLLEGE_SUCCESS:
      return fetchCollegeSuccess(state, action);
    case actionTypes.FETCH_COLLEGE_FAIL:
      return fetchCollegeFail(state, action);
    case actionTypes.FETCH_COLLEGES_START:
      return fetchCollegesStart(state, action);
    case actionTypes.FETCH_COLLEGES_SUCCESS:
      return fetchCollegesSuccess(state, action);
    case actionTypes.FETCH_COLLEGES_FAIL:
      return fetchCollegesFail(state, action);
    case actionTypes.SWITCH_PAGE:
      return switchPage(state, action);
    default:
      return state;
  }
};

export default reducer;
