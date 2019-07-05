import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";

const Routes = (
  <Router>
    <Route path="/" exact strict component={Home} />
    <Route path="/publicacoes" exact strict component={Articles} />
  </Router>
);

export default Routes;
