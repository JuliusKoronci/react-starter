import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const userMenu = (props) => {
    return (
        <div className="uk-dropdown uk-dropdown-small uk-dropdown-active uk-dropdown-shown">
            <ul className="uk-nav js-uk-prevent">
                <li><Link to='/settings/default'>Settings</Link></li>
                <li>
                    <Link to="/profile">My profile</Link>
                </li>
                <li><a href="#" onClick={props.logout}>Logout</a></li>
            </ul>
        </div>
    );
};

userMenu.propTypes = {
    logout: PropTypes.func.isRequired
};

export default userMenu;