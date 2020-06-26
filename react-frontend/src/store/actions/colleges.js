import * as actionTypes from "./actionTypes";

export const fetchCollegesStart = () => {
  return {
    type: actionTypes.FETCH_COLLEGES_START,
  };
};

export const fetchCollegeSuccess = (colleges) => {
  return {
    type: actionTypes.FETCH_COLLEGES_SUCCESS,
    colleges: colleges,
  };
};

export const fetchCollegeFail = (error) => {
  return {
    type: actionTypes.FETCH_COLLEGES_FAIL,
    error: error,
  };
};

export const fetchCollege = () => {
  return (dispatch) => {
    dispatch(fetchCollegesStart());
  };
};
