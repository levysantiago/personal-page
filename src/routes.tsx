import React from "react";
import { HashRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import dict from "./language/routes_dict.js";

const Routes = (
  <HashRouter>
    <Route path={dict.home.this} exact strict component={HomePage} />
  </HashRouter>
);

export default Routes;
