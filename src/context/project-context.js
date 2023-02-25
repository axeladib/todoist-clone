import React, {createContext, useContext } from "react";
import  {useProject}  from "../hooks";

export const ProjectsContext = createContext("Projects");
export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useProject();

  //TODO:Render the children data that get from context declaration
  return (
    <ProjectsContext.Provider
      value={{ projects, setProjects }}
    >
   {/* //Render something here */}
        {children}
    </ProjectsContext.Provider>
  );
};
//FIXME:This code i dont understand
export const useProjectsValue =() => useContext(ProjectsContext);
