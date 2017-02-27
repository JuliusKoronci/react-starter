import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const sidebar = ({filter}) => {
    return (
        <aside id="sidebar_main">
            <div className="sidebar_main_header">
                <div className="align-logo">
                    <Link to='/' className="uk-text-large"><h1 className="heading_a md-color-white">LAN HELPDESK
                        4.0</h1>
                    </Link>
                </div>
            </div>
            <div className="menu_section">
                <ul>
                    <li>
                        <Link to='/filter' className="uk-text-large">
                            <span className="menu_icon"><i className="material-icons">&#xE152;</i></span>
                            <span className="menu_title">FILTER</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="menu_section">
                <ul>
                    {filter.map((filt, i) => {
                        return (
                            <li key={i} title="FILTER">
                                <Link to={'/dashboard/' + filt.id}>
                                    <span className="menu_icon"><i className="material-icons">&#xE152;</i></span>
                                    <span className="menu_title">{filt.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="menu_section">
                <ul>
                    <li>
                        <Link to='/reports/companies' className="uk-text-large">
                            <span className="menu_icon"><i className="material-icons">&#xE85C;</i></span>
                            <span className="menu_title">Companies</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/reports/users'
                              className="uk-text-large">
                            <span className="menu_icon"><i className="material-icons">&#xE85C;</i></span>
                            <span className="menu_title">Users</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/reports/custom'
                              className="uk-text-large">
                            <span className="menu_icon"><i className="material-icons">&#xE85C;</i></span>
                            <span className="menu_title">Custom</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

sidebar.propTypes = {
    filter: PropTypes.array.isRequired
};

export default sidebar;