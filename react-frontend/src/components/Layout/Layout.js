import React from "react";

import Toolbar from "../UI/Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <nav>
        <Toolbar isAuth={props.isAuthenticated} />
      </nav>
      <main className={classes.Content}>{props.children}</main>
    </div>
  );
};

export default Layout;
