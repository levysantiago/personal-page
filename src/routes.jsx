import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import ProjectsPage from "./pages/ProjectsPage";
import HellowPage from "./pages/HellowPage";
import BlogPage from "./pages/blog/BlogPage";
import PostsList from "./pages/blog/PostsList";
import BlogArticlePage from "./pages/blog/BlogArticlePage";
import dict from "./language/routes_dict.js";

const Routes = (
  <Router>
    <Route path={dict.home.this} exact strict component={HomePage} />
    {/* <Route
      path={dict.home.articles.this}
      exact
      strict
      component={ArticlesPage}
    /> */}
    <Route
      path={dict.home.projects.this}
      exact
      strict
      component={ProjectsPage}
    />
    <Route path={dict.home.blog.this} exact strict component={BlogPage} />
    <Route
      path={dict.home.blog.hellowtips.this}
      exact
      strict
      component={HellowPage}
    />
    <Route
      path={dict.home.blog.travels.this}
      exact
      strict
      component={PostsList}
    />
    <Route
      path={dict.home.blog.personalgrowth.this}
      exact
      strict
      component={PostsList}
    />
    <Route path={dict.home.blog.article.this} component={BlogArticlePage} />
  </Router>
);

export default Routes;
