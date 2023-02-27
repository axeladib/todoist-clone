import React, { createContext, useContext } from "react";
import { useProjects } from "../hooks";

export const ProjectsContext = createContext();
export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useProjects();

  //TODO:Render the children data that get from context declaration
  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {/* //Render something here */}
      {children}
    </ProjectsContext.Provider>
  );
};
//FIXME:This code i dont understand
export const useProjectsValue = () => useContext(ProjectsContext);
