import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import dict from "./language/routes_dict.js";

const MyRoutes = (
  <HashRouter>
    <Routes>
      <Route path={dict.home.this} element={<HomePage />} />
    </Routes>
  </HashRouter>
);

export default MyRoutes;
