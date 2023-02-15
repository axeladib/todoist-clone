import React from "react";

export const Tasks = () =>{
   const tasks = [];
   const projectName = "";

   return (
    <div className="tasks" data-testid="tasks">
        <h2 data-testid="project-name">{projectName}</h2>
        <ul className="task__list">

        
        </ul>
    </div>
   )

}