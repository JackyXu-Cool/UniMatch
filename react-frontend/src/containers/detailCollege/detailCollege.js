import React, { Fragment } from "react";
import { connect } from "react-redux";

import classes from "./detailCollege.module.css";
import { Redirect } from "react-router-dom";

const DetailCollege = (props) => {
  const { college } = props;
  let content = <Redirect to="/" />;
  if (college) {
    content = (
      <Fragment>
        <h1>{college.name}</h1>
        <a href={`http://${college.url}`}>{college.url}</a>
        <div className={classes.Statistics}></div>
      </Fragment>
    );
  }
  return <div className={classes.DetailCollege}>{content}</div>;
};

const mapStateToProps = (state) => {
  return {
    college: state.college.college,
  };
};

export default connect(mapStateToProps)(DetailCollege);
