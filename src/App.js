import React from "react";
import Header from "./components/Header";
import { Content } from "./components/Content";
import { SelectedProjectProvider} from "./context/selected-projects-context";
import {ProjectsProvider} from "./context/project-context";
import "./App.scss";

export const App = () => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="app">
          <Content />
          <Header />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};
