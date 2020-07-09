import React, { useEffect } from "react";

import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/index";

import classes from "./collegeSearch.module.css";

const CollegeSearch = (props) => {
  const { onFetchCollege } = props;

  useEffect(() => {
    onFetchCollege(217800);
  }, [onFetchCollege]);

  return <div className={classes.MainLayout}></div>;
};

const mapStateToProps = (state) => {
  return {
    college: state.college.college,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCollege: (opeid) => dispatch(actionCreators.fetchCollege(opeid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollegeSearch);
