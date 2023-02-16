import React from "react";
import Header from "./components/layout/layout/Header";
import Sidebar from "./components/layout/layout/Sidebar";
import "./App.scss";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />

    </div>
  );
};
