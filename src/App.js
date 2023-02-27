import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { ProjectsProvider, SelectedProjectProvider } from "./context";
import "./App.scss";

export const App = () => {
  return (
    // <SelectedProjectProvider>
    //   <ProjectsProvider>
        <div className="app">
          <Header />
          <Sidebar />
        </div>
    //   {/* </ProjectsProvider>
    // </SelectedProjectProvider> */}nnnnnnnnnnnnnnnnnnnnn 
  );
};
