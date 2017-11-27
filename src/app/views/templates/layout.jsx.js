import React from "react";
import Header from "./header.jsx";
// import Sidebar from './sidebar.jsx';
import Sidebar from "../../components/Main/Sidebar/Sidebar";

export default ({
  children,
  user,
  actions,
  filters,
  sidebarIsMinified,
  projects,
  archivedProjects,
  tags,
  params,
  loggedUserAcl,
  location
}) => {
  return (
    <div>
      <Header
        user={user}
        logout={actions.logout}
        sidebarIsMinified={sidebarIsMinified}
        toggleSidebar={actions.toggleSidebar}
        params={params}
      />
      <Sidebar
        filters={filters}
        projects={projects}
        archivedProjects={archivedProjects}
        tags={tags}
        params={params}
        loggedUserAcl={loggedUserAcl}
        location={location}
        sidebarIsMinified={sidebarIsMinified}
      />
      <div id="page_content">
        <div id="page_content_inner">
          <div className="md-card">
            {children}
            {/* {React.cloneElement(children, { projects, tags })} */}
          </div>
        </div>
      </div>
    </div>
  );
};
