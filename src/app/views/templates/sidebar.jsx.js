import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {generateRoute,paths} from '../../../config/router';

const sidebar = ({filter,projects,tags,sidebarClickEvent,params, menuToggleActive}) => {

    const projectId=params.projectId;
    const tagId=params.tagId;


    return (
        <aside id="sidebar_main" style={{overflow:'auto'}}>
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
                    <li className={tagId?"submenu_trigger act_section":'submenu_trigger'} >
                        <a href="#" onClick={menuToggleActive.bind(null)} className={tagId?'active':''} ><span className="menu_icon"><i className="material-icons">&#xE85C;</i></span>
                            <span className="menu_title">Tags</span>
                        </a>

                        <ul >
                            {tags.map((tag, i) => {
                                const link=generateRoute('tag_tasks',{tagId:tag.id});

                                return <li key={i}>
                                    <Link to={link}
                                          className={tag.id==tagId?'active uk-text-large':'uk-text-large'} >
                                        {tag.title}
                                    </Link>
                                </li>
                            })}
                        </ul>
                    </li>



                    <li className={projectId?"submenu_trigger act_section":'submenu_trigger'} >
                            <a href="#" onClick={menuToggleActive.bind(null)} className={projectId?'active':''} ><span className="menu_icon"><i className="material-icons">&#xE85C;</i></span>
                            <span className="menu_title">Projects</span>
                            </a>

                        <ul>
                            {projects.map((project, i) => {
                                const link=generateRoute('project_tasks',{projectId:project.id});
                                return <li key={i}>
                                    <Link to={link}
                                          className={project.id==projectId?'active uk-text-large':'uk-text-large'} >
                                    {project.title}
                                    </Link>
                                    </li>
                            })}
                        </ul>
                    </li>



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