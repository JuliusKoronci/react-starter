import React, { PropTypes } from "react";
import UserMenu from "../../components/Main/Header/UserMenu";
import GlobalSearch from "../../components/Main/Header/GlobalSearch";

const header = ({ user, logout, sidebarIsMinified, toggleSidebar, params }) => {
  return (
    <header id="header_main">
      <div className="header_main_content">
        <nav className="uk-navbar">
          <a
            href="#"
            id="sidebar_main_toggle"
            className={
              sidebarIsMinified
                ? "sSwitch sSwitch_right"
                : "sSwitch sSwitch_left"
            }
            onClick={toggleSidebar.bind(null, !sidebarIsMinified)}
          >
            <span className="sSwitchIcon" />
          </a>

          <GlobalSearch params={params} />

          <div className="uk-navbar-flip">
            <ul className="uk-navbar-nav user_actions">
              <UserMenu user={user} logout={logout} />
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

header.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default header;
