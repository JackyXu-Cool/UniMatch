import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import CollegeSearch from "./colleges/pages/collegeSearch";
import Auth from "./users/pages/Auth";

import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <CollegeSearch />
          </Route>
          <Route path="/auth" exact>
            <Auth />
          </Route>
          <Route path="/college/:opeid">

          </Route>
          <Route path="/college/compare">

          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>);
};

export default App;
