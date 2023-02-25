import React from "react";
import Header from "./components/layout/layout/Header";
import Sidebar from "./components/layout/layout/Sidebar";
import { ProjectsProvider, SelectedProjectProvider } from "./context";
import "./App.scss";

export const App = () => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <Header />
          <Sidebar />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};
