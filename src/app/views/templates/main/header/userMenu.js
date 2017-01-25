import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import UserAvatar from '../_partials/userAvatar.jsx';

const userMenu = ({user,logout,dropdownToggled,toggle}) => {
    return (

    <li className={dropdownToggled ? "uk-open" : ""} onClick={toggle}>
        <a href="#" className="user_action_image">
            <UserAvatar user={user}/>
        </a>

        {dropdownToggled &&
        <div className="uk-dropdown uk-dropdown-small uk-dropdown-active uk-dropdown-shown">
            <ul className="uk-nav js-uk-prevent">
                <li><Link to='/settings/default'>Settings</Link></li>
                <li>
                    <Link to="/profile">My profile</Link>
                </li>
                <li><a href="#" onClick={logout}>Logout</a></li>
            </ul>
        </div>}
    </li>


    );
};

userMenu.propTypes = {
    logout: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    dropdownToggled:PropTypes.bool.isRequired,

};

export default userMenu;