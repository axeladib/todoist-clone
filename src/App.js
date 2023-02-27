import React from "react";
import Header from "./components/Header";
import { Content } from "./components/Content";
import { SelectedProjectProvider, ProjectsProvider } from "./context";

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
