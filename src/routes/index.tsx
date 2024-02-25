import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { LanguageContextProvider } from "components/contexts/LanguageContext";
import { routesDict } from "./content/routes-dict";

const MyRoutes = (
  <HashRouter>
    <LanguageContextProvider>
      <Routes>
        <Route path={routesDict.home.this} element={<HomePage />} />
        <Route path={`${routesDict.home.this}/:lang`} element={<HomePage />} />
      </Routes>
    </LanguageContextProvider>
  </HashRouter>
);

export default MyRoutes;
