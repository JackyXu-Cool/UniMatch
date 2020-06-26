import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import MenuItems from "../MenuItems/MenuItems";

import "./Toolbar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ToolBar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuItems />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Colleges
          </Typography>
          <Button color="inherit">
            <Link to="/auth">Login/Signup</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ToolBar;
