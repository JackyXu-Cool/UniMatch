import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/index";
import CollegeCard from "../../components/collegeCard/collegeCard";
import Spinner from "../../components/UI/Spinner/Spinner";

import classes from "./collegeSearch.module.css";

const CollegeSearch = (props) => {
  const { onFetchColleges, page, colleges, loading } = props;

  useEffect(() => {
    onFetchColleges(page);
  }, [onFetchColleges, page]);

  let mainContent = <Spinner />;

  if (!loading) {
    mainContent = (
      <Fragment>
        {colleges.map((college, index) => (
          <CollegeCard {...college} key={index} />
        ))}
      </Fragment>
    );
  }

  return <div className={classes.MainLayout}>{mainContent}</div>;
};

const mapStateToProps = (state) => {
  return {
    colleges: state.college.colleges,
    page: state.college.page,
    loading: state.college.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchColleges: (range) => dispatch(actionCreators.fetchColleges(range)),
    onSwitchPage: (page) => dispatch(actionCreators.switchPage(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollegeSearch);
