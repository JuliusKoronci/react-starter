import React, { PropTypes } from "react";
import UserMenu from "../../components/Main/Header/UserMenu";

const header = ({ user, logout, sidebarIsMinified, toggleSidebar }) => {
  return (
    <header id="header_main">
      <div className="header_main_content">

        <nav className="uk-navbar">
          <a
            href="#"
            id="sidebar_main_toggle"
            className={
              sidebarIsMinified ? (
                "sSwitch sSwitch_right"
              ) : (
                "sSwitch sSwitch_left"
              )
            }
            onClick={toggleSidebar.bind(null, !sidebarIsMinified)}
          >
            <span className="sSwitchIcon" />
          </a>

          <div className="uk-grid">
            <div className="uk-navbar-flip uk-width-1-2">
              <div className="uk-input-group" style={{marginTop:"6px"}}>
                  <input type="text" className="md-input"  style={{background:"white"}} />
                  <span className="uk-input-group-addon">
                    <a className="md-btn md-btn-success md-btn-wave-light waves-effect waves-button waves-light" href="#">
                    <i className="material-icons md-light">&#xE8B6;</i>
                  </a>
                </span>
              </div>
          </div>

          <div className=" uk-width-1-2" style={{float:"right"}}>
            <div className="uk-navbar-flip">
                <ul className="uk-navbar-nav user_actions">
                        <UserMenu user={user} logout={logout} />
                </ul>
              </div>
            </div>
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
