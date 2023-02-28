import React, { useState } from "react";
import { useSelectedProjectValue, useProjectsValue } from "../context";


export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setselectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  return (
    projects &&
    projects.map((project) => (
      <li
        key={project.projectId}
        data-testId="project-action-parent"
        data-doc-id={project.docId}
        className={
          active === project.projectId
            ? "active sidebar__project"
            : "sidebar__project"
        }
        onClick = {()=>{
            setActive(project.projectId);
            setselectedProject(project.projectId);
        }}

        onKeyDown = {()=>{
            setActive(project.projectId);
            setselectedProject(project.projectId);
        }}
      >
        {("Projects", JSON.stringify(project))}
      </li>
    ))
  );
};
