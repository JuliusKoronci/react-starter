import React, { PropTypes } from "react";
import { Link } from "react-router";
import UserAvatar from "../_partials/userAvatar.jsx";

const userDropdownMenu = ({ user, logout, dropdownToggled, handleToggle }) => {
  const usernameStyle = {
    paddingLeft: "15px"
  };

  const userAvatarStyle = {
    marginTop: "4px"
  };

  return (
    <li className={dropdownToggled ? "uk-open" : ""} onClick={handleToggle}>
      <a href="#" className="user_action_image">
        <div className="user_heading_avatar" style={userAvatarStyle}>
          <UserAvatar user={user} className="thumbnail header-thumbnail" />
          <span style={usernameStyle}>{user.username}</span>
        </div>
      </a>

      {dropdownToggled && (
        <div className="uk-dropdown uk-dropdown-small uk-dropdown-active uk-dropdown-shown">
          <ul className="uk-nav js-uk-prevent">
            <li>
              <Link to="/settings/default">Settings</Link>
            </li>
            <li>
              <Link to="/profile">My profile</Link>
            </li>
            <li>
              <a href="#" onClick={logout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
};

userDropdownMenu.propTypes = {
  logout: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  dropdownToggled: PropTypes.bool.isRequired
};

export default userDropdownMenu;
