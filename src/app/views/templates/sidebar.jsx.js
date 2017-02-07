import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const sidebar = ({filter}) => {
    return (
        <aside id="sidebar_main">
            <div className="sidebar_main_header">
                <div className="align-logo">
                    <Link to='/' className="uk-text-large"><h1 className="heading_a md-color-white">LAN HELPDESK
                        4.0</h1></Link>
                </div>
            </div>

            <div className="menu_section">
                <ul>
                    {filter.map((filt, i) => {
                        return (
                            <li key={i} title="FILTER">
                                <a href="#">
                                    <span className="menu_icon"><i className="material-icons">&#xE152;</i></span>
                                    <span className="menu_title">{filt.title}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="menu_section">
                <ul>
                    <li>
                        <a href="#">
                            <span className="menu_icon"><i className="material-icons">&#xE85C;</i></span>
                            <span className="menu_title"><Link to='/reports/companies' className="uk-text-large">Companies</Link></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="menu_icon"><i className="material-icons">&#xE85C;</i></span>
                            <span className="menu_title"><Link to='/reports/users'
                                                               className="uk-text-large">Users</Link></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="menu_icon"><i className="material-icons">&#xE85C;</i></span>
                            <span className="menu_title"><Link to='/reports/custom'
                                                               className="uk-text-large">Custom</Link></span>
                        </a>
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