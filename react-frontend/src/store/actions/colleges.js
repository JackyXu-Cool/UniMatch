import * as actionTypes from "./actionTypes";

import axiosUni from "../../axios-Uni";

export const fetchCollegesStart = () => {
  return {
    type: actionTypes.FETCH_COLLEGES_START,
  };
};

export const fetchCollegeSuccess = (college) => {
  return {
    type: actionTypes.FETCH_COLLEGES_SUCCESS,
    college: college,
  };
};

export const fetchCollegeFail = (error) => {
  return {
    type: actionTypes.FETCH_COLLEGES_FAIL,
    error: error,
  };
};

export const fetchCollege = (opeid) => {
  return async (dispatch) => {
    dispatch(fetchCollegesStart());
    try {
      const response = await axiosUni.get(`/basic/${opeid}`);
      console.log(response);
      dispatch(fetchCollegeSuccess(response));
    } catch (error) {
      console.log(error);
      dispatch(fetchCollegeFail(error));
    }
  };
};
