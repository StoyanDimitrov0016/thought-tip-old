import { useState } from "react";
import { Link } from "react-router-dom";

import { SidebarClosed, SidebarContainer } from "./Sidebar.styles";
import {
  applicationName,
  currentYear,
  sidebarNavigationMaterials,
} from "../../constants";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!isSidebarOpen) {
    return (
      <SidebarClosed onClick={() => setIsSidebarOpen(true)}>
        <img src="/burger-menu-svg.svg" alt="" />
      </SidebarClosed>
    );
  }

  return (
    <SidebarContainer>
      <button onClick={() => setIsSidebarOpen(false)}>Close</button>
      {sidebarNavigationMaterials.map(({ category, links }) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {links.map(({ title, path }) => (
              <li key={path}>
                <Link to={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <footer>
        <p>
          &copy; {currentYear} {applicationName}
        </p>
      </footer>
    </SidebarContainer>
  );
};

export default Sidebar;
