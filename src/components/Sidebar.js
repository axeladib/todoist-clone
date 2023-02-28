import React,{useState} from "react";
import {
  FaRegCalendar,
  FaInbox,
  FaRegCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import { Projects } from "./Projects";
import { useSelectedProjectValue } from "../context";

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState("inbox");
  const [showProjects, setShowProjects] = useState(true);
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li>
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li>
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li>
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>
      <div className="sidebar__middle">
        <span>
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
        <ul className="sidebar__projects">
          {/* <li> Projects will be here!</li>
          <li> Add Project Component Here!!!</li> */}
          {showProjects && <Projects />}
        </ul>
        {showProjects && <Projects />}
      </div>
    </div>
  );
};
