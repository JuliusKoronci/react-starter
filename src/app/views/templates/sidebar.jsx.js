import React, {PropTypes} from 'react';

const sidebar = (prop) => {
    return (
        <aside id="sidebar_main">
            <div className="sidebar_main_header">
                <div className="sidebar_logosidebar_logo"/>
            </div>

            <div className="menu_section">
                <ul>
                    <li title="FILTER">
                        <a href="#">
                            <span className="menu_icon"><i className="material-icons">&#xE152;</i></span>
                            <span className="menu_title">FILTER</span>
                        </a>
                    </li>
                    <li title="DO IT">
                        <a href="#">
                            <span className="menu_icon"><i className="material-icons">&#xE88A;</i></span>
                            <span className="menu_title">DO IT</span>
                        </a>
                    </li>
                    <li title="INBOX">
                        <a href="#">
                            <span className="menu_icon"><i className="material-icons">&#xE0E1;</i></span>
                            <span className="menu_title">INBOX</span>
                        </a>
                    </li>
                    <li title="IMPORTANT">
                        <a href="#">
                            <span className="menu_icon"><i className="material-icons">&#xE838;</i></span>
                            <span className="menu_title">IMPORTANT</span>
                        </a>
                    </li>
                    <li title="ASSIGNED">
                        <a href="#">
                            <span className="menu_icon"><i className="material-icons">&#xE7EF;</i></span>
                            <span className="menu_title">ASSIGNED</span>
                        </a>
                    </li>
                    <li title="SCHELDULED">
                        <a href="#">
                            <span className="menu_icon"><i className="material-icons">&#xE858;</i></span>
                            <span className="menu_title">SCHELDULED</span>
                        </a>
                    </li>
                    <li title="REPEATED">
                        <a href="#">
                            <span className="menu_icon"><i className="material-icons">&#xE040;</i></span>
                            <span className="menu_title">REPEATED</span>
                        </a>
                    </li>
                    <li title="PROJECTS">
                        <a href="#">
                            <span className="menu_icon"><i className="material-icons">&#xE2C8;</i></span>
                            <span className="menu_title">PROJECTS</span>
                        </a>
                        <ul>
                            <li className="submenu-li">
                                <span className="submenu-title"><a href="project.html">Project 1</a></span>
                                <span className="submenu-icon"><a href="project_permisions.html"><i
                                    className="material-icons">&#xE8B8;</i></a></span>
                            </li>
                            <li className="submenu-li">
                                <span className="submenu-title"><a href="project.html">Project 2</a></span>
                                <span className="submenu-icon"><a href="project_permisions.html"><i
                                    className="material-icons">&#xE8B8;</i></a></span>
                            </li>
                        </ul>
                    </li>
                    <li title="CONTEXTS">
                        <a href="#">
                            <span className="menu_icon"><i className="material-icons">&#xE893;</i></span>
                            <span className="menu_title">CONTEXTS</span>
                        </a>
                        <ul>
                            <li className="submenu-li">
                                    <span className="submenu-title"><a href="context.html"><span
                                        className="uk-badge uk-badge-warning">contex1</span></a></span>
                                <span className="submenu-icon"><a href="settings_context.html"><i
                                    className="material-icons">&#xE8B8;</i></a></span>
                            </li>
                            <li className="submenu-li">
                                <span className="submenu-title"><a href="context.html"><span className="uk-badge">contex2</span></a></span>
                                <span className="submenu-icon"><a href="settings_context.html"><i
                                    className="material-icons">&#xE8B8;</i></a></span>
                            </li>
                            <li className="submenu-li">
                                    <span className="submenu-title"><a href="context.html"><span
                                        className="uk-badge uk-badge-success">contex3</span></a></span>
                                <span className="submenu-icon"><a href="settings_context.html"><i
                                    className="material-icons">&#xE8B8;</i></a></span>
                            </li>
                            <li className="submenu-li">
                                    <span className="submenu-title"><a href="context.html"><span
                                        className="uk-badge uk-badge-danger">contex4</span></a></span>
                                <span className="submenu-icon"><a href="settings_context.html"><i
                                    className="material-icons">&#xE8B8;</i></a></span>
                            </li>
                        </ul>
                    </li>
                    <li title="ARCHIVED">
                        <a href="#">
                            <span className="menu_icon"><i className="material-icons">&#xE149;</i></span>
                            <span className="menu_title">ARCHIVED</span>
                        </a>
                        <ul>
                            <li><a href="page_chat.html">Project 3</a></li>
                            <li><a href="page_chat_small.html">Project 4</a></li>
                        </ul>
                    </li>
                    <li title="Reports">
                        <a href="#">
                            <span className="menu_icon"><i className="material-icons">&#xE85C;</i></span>
                            <span className="menu_title">REPORTS</span>
                        </a>
                        <ul>
                            <li><a href="reports_companies.html">Companies</a></li>
                            <li><a href="reports_users.html">Users</a></li>
                            <li><a href="reports_custom.html">Custom</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

sidebar.propTypes = {
    // prop: PropTypes.object.isRequired
};

export default sidebar;