import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import ProjectsPage from "./pages/ProjectsPage";
import HellowPage from "./pages/HellowPage";
import BlogPage from "./pages/blog/BlogPage";
import PostsList from "./pages/blog/PostsList";

const Routes = (
  <Router>
    <Route path="/" exact strict component={HomePage} />
    <Route path="/publicacoes" exact strict component={ArticlesPage} />
    <Route path="/projetos" exact strict component={ProjectsPage} />
    <Route path="/hellowtips" exact strict component={HellowPage} />
    <Route path="/blog" exact strict component={BlogPage} />
    <Route path="/travels" exact strict component={PostsList} />
    <Route path="/personalgrowth" exact strict component={PostsList} />
  </Router>
);

export default Routes;
