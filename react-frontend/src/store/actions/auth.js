import * as actionTypes from "./actionTypes";

import axiosUni from "../../axios-Uni";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (response, signup, username) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    response: response,
    signup: signup,
    username: username,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (data, signup) => {
  return async (dispatch) => {
    dispatch(authStart());
    try {
      let response;
      if (data.isSignup) {
        response = await axiosUni.post("/signup", data);
      } else {
        response = await axiosUni.post("/auth", data);
      }
      localStorage.setItem("username", data.username);
      localStorage.setItem("password", data.password);
      setTimeout(() => {
        logout();
      }, 1000);
      console.log(response);
      dispatch(authSuccess(response, signup, data.username));
    } catch (error) {
      console.log(error);
      dispatch(authFail(error));
    }
  };
};

export const autoLogin = () => {
  return async (dispatch) => {
    dispatch(authStart());
    try {
      const response = await axiosUni.post("/auth", {
        username: localStorage.getItem("username"),
        password: localStorage.getItem("password"),
      });
      dispatch(authSuccess(response, false));
    } catch (error) {}
  };
};

export const logout = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("password");
  return {
    type: actionTypes.LOGOUT,
  };
};
