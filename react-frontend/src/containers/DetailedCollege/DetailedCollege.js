import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import PieChart from "../../components/UI/PieChart/PieChart";
import LineChart from "../../components/UI/LineChart/LineChart";
import Map from "../../components/UI/Map/Map";
import PercentageChart from "../../components/UI/PercentageChart/PercentageChart";
import classes from "./DetailedCollege.module.css";

const DetailCollege = (props) => {
  const { college } = props;
  let content = <Redirect to="/" />;
  if (college) {
    const scoreDataACT = [
      { title: "25", score: college.ACT_25 },
      { title: "AVG", score: college.ACT_AVG },
      { title: "75", score: college.ACT_75 },
      { title: "EN_25", score: college.ACT_EN_25 },
      { title: "EN_AVG", score: college.ACT_EN_AVG },
      { title: "EN_75", score: college.ACT_EN_75 },
      { title: "M_25", score: college.ACT_M_25 },
      { title: "M_AVG", score: college.ACT_M_AVG },
      { title: "M_75", score: college.ACT_M_75 },
    ];
    const scoreDataSAT = [
      { title: "AVG", score: college.SAT_AVG },
      { title: "M_25", score: college.SAT_M_25 },
      { title: "M_MID", score: college.SAT_M_MID },
      { title: "M_75", score: college.SAT_M_75 },
      { title: "R_25", score: college.SAT_R_25 },
      { title: "R_MID", score: college.SAT_R_MID },
      { title: "R_75", score: college.SAT_R_75 },
    ];
    const raceData = [
      {
        type: "Asian",
        value: college.race_asian * 100,
      },
      {
        type: "Black",
        value: college.race_black * 100,
      },
      {
        type: "Hispanic",
        value: college.race_hispanic * 100,
      },
      {
        type: "White",
        value: college.race_white * 100,
      },
    ];

    content = (
      <Fragment>
        <h1>{college.name}</h1>
        <a href={`http://${college.url}`}>{college.url}</a>
        <div className={classes.Statistics}>
          <PercentageChart rate={college.admission_rate} />
          <LineChart title="ACT Score Report" data={scoreDataACT} />
          <LineChart title="SAT Score Report" data={scoreDataSAT} />
          <PieChart title="Race Report" data={raceData} />
          <Map
            longitude={college.longitude}
            latitude={college.latitude}
            name={college.name}
          />
        </div>
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
