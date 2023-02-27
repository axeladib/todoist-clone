import React from "react";
import {
  FaRegCalendar,
  FaInbox,
  FaRegCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

export const Sidebar = () => {
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
      <div>
        <span >
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
        <ul className="sidebar__projects">Projects will be here!</ul>
        Add Project Component Here!!!
      </div>
    </div>
  );
};
