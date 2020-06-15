import React, { Fragment } from "react";

import DrawerToggle from "./DrawerToggle/DrawerToggle";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";
const Toolbar = (props) => (
  <Fragment>
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToogleClicked} />
      <nav className={classes.DesktopOnly}>
        <NavigationItems
          isAuth={props.isAuth}
          className={classes.DesktopOnly}
        />
      </nav>
    </header>
  </Fragment>
);

export default Toolbar;
