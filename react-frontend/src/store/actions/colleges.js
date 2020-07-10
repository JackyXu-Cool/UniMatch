import * as actionTypes from "./actionTypes";

import axiosUni from "../../axios-Uni";

export const fetchCollegesStart = () => {
  return {
    type: actionTypes.FETCH_COLLEGES_START,
  };
};

export const fetchCollegesSuccess = (colleges) => {
  return {
    type: actionTypes.FETCH_COLLEGES_SUCCESS,
    colleges: colleges,
  };
};

export const fetchCollegesFail = (error) => {
  return {
    type: actionTypes.FETCH_COLLEGES_FAIL,
    error: error,
  };
};

export const fetchColleges = (range) => {
  return async (dispatch) => {
    dispatch(fetchCollegesStart());
    try {
      const colleges = await axiosUni.get(`/schools/byid/basic/${range}`);
      dispatch(fetchCollegeSuccess(colleges));
    } catch (error) {
      dispatch(fetchCollegesFail(error));
    }
  };
};

export const fetchCollegeStart = () => {
  return {
    type: actionTypes.FETCH_COLLEGE_START,
  };
};

export const fetchCollegeSuccess = (college) => {
  return {
    type: actionTypes.FETCH_COLLEGE_SUCCESS,
    college: college,
  };
};

export const fetchCollegeFail = (error) => {
  return {
    type: actionTypes.FETCH_COLLEGE_FAIL,
    error: error,
  };
};

export const fetchCollege = (opeid) => {
  return async (dispatch) => {
    dispatch(fetchCollegesStart());
    try {
      const response = await axiosUni.get(`/schools/byrank/full/${opeid}`);
      dispatch(fetchCollegeSuccess(response));
    } catch (error) {
      dispatch(fetchCollegeFail(error));
    }
  };
};

export const switchPage = (page) => {
  return {
    type: actionTypes.SWITCH_PAGE,
    page: page,
  };
};
