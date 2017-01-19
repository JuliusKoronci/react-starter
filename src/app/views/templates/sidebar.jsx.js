import React, {PropTypes} from 'react';

const sidebar = ({filter}) => {
    return (
        <aside id="sidebar_main">
            <div className="sidebar_main_header">
                <div className="sidebar_logosidebar_logo">
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
        </aside>
    );
};

sidebar.propTypes = {
    filter: PropTypes.array.isRequired
};

export default sidebar;