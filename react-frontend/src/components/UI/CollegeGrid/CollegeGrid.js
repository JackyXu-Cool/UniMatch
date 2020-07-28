import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import FaceIcon from "@material-ui/icons/Face";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: "60%",
    maxWidth: "60%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const CollegeGrid = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <ArrowForwardIcon color="primary" />
            Transfer rate: {(props.college.transfer_rate * 100).toFixed(2)} %
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <AutorenewIcon color="secondary" />
            Retention rate: {(props.college.retention_rate * 100).toFixed(2)} %
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <AttachMoneyIcon color="primary" />
            In-state tuition: $ {props.college.tuition_IN}
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <AttachMoneyIcon color="secondary" />
            Out-state tuition: $ {props.college.tuition_OUT}
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <ChildCareIcon color="primary" />
            Undergraduates: {props.college.enrollment}
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <FaceIcon color="secondary" />
            Graduate: {props.college.graduates}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CollegeGrid;
