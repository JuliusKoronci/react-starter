import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {generateRoute,paths} from '../../../config/router';

const sidebar = ({filter,projects,tags,sidebarClickEvent,params, menuToggleActive}) => {

    const projectId=params.projectId;
    const tagId=params.tagId;
    const reportId=params.reportId;


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
                    {/*sidebar menu - projects */}
                    <li className={projectId?"submenu_trigger act_section":'submenu_trigger'} >
                            <a href="#" onClick={menuToggleActive.bind(null)} className={projectId?'active':''} ><span className="menu_icon"><i className="material-icons">&#xE2C8;</i></span>
                            <span className="menu_title">Projects</span>
                            </a>

                        <ul>
                            {projects.map((project, i) => {
                                const link=generateRoute('project_tasks',{projectId:project.id});
                                const linkEdit=generateRoute('project_edit',{projectId:project.id});

                                return <li key={i}>


                                    <span className="submenu-icon">
                                        <Link to={linkEdit}>
                                            <i className="material-icons">&#xE8B8;</i>
                                        </Link>
                                    </span>

                                    <span className="submenu-title">
                                     <Link to={link}
                                           className={project.id==projectId?'active uk-text-large':'uk-text-large'}                                      >
                                          {project.title}
                                        </Link>
                                     </span>

                                </li>
                            })}
                            <li><Link to={paths.project_add} className="submenu-add md-color-blue-500">
                                <i className="material-icons md-color-blue-500">&#xE145;</i>Project</Link></li>
                        </ul>
                    </li>


                    {/*sidebar menu tags */}
                    <li className={tagId?"submenu_trigger act_section":'submenu_trigger'} >
                        <a href="#" onClick={menuToggleActive.bind(null)} className={tagId?'active':''} >
                            <span className="menu_icon"><i className="material-icons">&#xE893;</i></span>
                            <span className="menu_title">Tags</span>
                        </a>

                        <ul >
                            {tags.map((tag, i) => {
                                const link=generateRoute('tag_tasks',{tagId:tag.id});
                                const linkEdit=generateRoute('tag_edit',{tagId:tag.id});

                                return <li key={i}>
                                    <span className="submenu-title">
                                        <Link to={link}
                                              className={tag.id==tagId?'active uk-text-large':'uk-text-large'}>
                                                {tag.title}
                                        </Link>
                                    </span>

                                        <Link className="submenu-icon" to={linkEdit}>
                                            <i className="material-icons">&#xE8B8;</i>
                                        </Link>

                                </li>
                            })}
                            <li><Link to={paths.tag_add} className="submenu-add md-color-blue-500">
                                <i className="material-icons md-color-blue-500">&#xE145;</i>Tag</Link></li>
                        </ul>
                    </li>


                    {/*sidebar menu Reports */}
                    <li className={tagId?"submenu_report act_section":'submenu_trigger'}>
                        <a href="#" onClick={menuToggleActive.bind(null)} className={reportId?'active':''}><span
                            className="menu_icon"><i className="material-icons">&#xE85C;</i></span>
                            <span className="menu_title">Reports</span>
                        </a>
                        <ul>
                            <li>
                                <Link to='/reports/companies' className="report-menu">
                                    <span className="menu_title">Companies</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/reports/users'
                                      className="report-menu">
                                    <span className="menu_title">Users</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/reports/custom'
                                      className="report-menu">
                                    <span className="menu_title">Custom</span>
                                </Link>
                            </li>
                            <li><Link to={paths.report_add} className="submenu-add md-color-blue-500">
                                <i className="material-icons md-color-blue-500">&#xE145;</i>
                                Report</Link>
                            </li>
                            <li>
                                   <span className="submenu-icon">
                                        <Link to='/reports/custom'>
                                            <i className="material-icons">&#xE8B8;</i>
                                        </Link>
                                    </span>

                                   <Link className="submenu-title" to='/reports/custom'>
                                         Custom
                                   </Link>
                               
                            </li>

                        </ul>
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