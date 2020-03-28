import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import ProjectsPage from "./pages/ProjectsPage";
import HellowPage from "./pages/HellowPage";
import BlogPage from "./pages/blog/BlogPage";
import PostsList from "./pages/blog/PostsList";
import BlogArticlePage from "./pages/blog/BlogArticlePage";

const Routes = (
  <Router>
    <Route path="/" exact strict component={HomePage} />
    <Route path="/articles" exact strict component={ArticlesPage} />
    <Route path="/projects" exact strict component={ProjectsPage} />
    <Route path="/blog/hellowtips" exact strict component={HellowPage} />
    <Route path="/blog" exact strict component={BlogPage} />
    <Route path="/blog/travels" exact strict component={PostsList} />
    <Route path="/blog/personalgrowth" exact strict component={PostsList} />
    <Route path="/blog/article" exact strict component={BlogArticlePage} />
  </Router>
);

export default Routes;
