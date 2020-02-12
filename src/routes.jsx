import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import ProjectsPage from "./pages/ProjectsPage";
import HellowPage from "./pages/HellowPage";

const Routes = (
  <Router>
    <Route path="/" exact strict component={HomePage} />
    <Route path="/articles" exact strict component={ArticlesPage} />
    <Route path="/projects" exact strict component={ProjectsPage} />
    <Route path="/hellowtips" exact strict component={HellowPage} />
  </Router>
);

export default Routes;
