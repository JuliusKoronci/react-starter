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
                        <Link to='/filter'>
                            <span className="menu_icon"><i className="material-icons md-color-blue-500">&#xE145;</i></span>
                            <span className="menu_title md-color-blue-500">NEW TASK</span>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/filter'>
                            <span className="menu_icon"><i className="material-icons">&#xE152;</i></span>
                            <span className="menu_title">FILTER</span>
                        </Link>
                    </li>
                </ul>
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

                                   <span className="submenu-title">
                                     <Link to={link}
                                           className={project.id==projectId?'active':''}                                      >
                                          {project.title}
                                        </Link>
                                     </span>
                                    <span className="submenu-icon">
                                        <Link to={linkEdit}>
                                            <i className="material-icons">&#xE8B8;</i>
                                        </Link>
                                    </span>
                                </li>
                            })}
                            <li>
                                <span className="submenu-title">
                                    <Link to={paths.project_add} className="md-color-blue-500">
                                        <i className="material-icons md-color-blue-500">&#xE145;</i>
                                        Project
                                    </Link>
                                </span>
                            </li>
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
                                              className={tag.id==tagId?'active':''}>
                                                {tag.title}
                                        </Link>
                                    </span>

                                        <Link className="submenu-icon" to={linkEdit}>
                                            <i className="material-icons">&#xE8B8;</i>
                                        </Link>

                                </li>
                            })}
                            <li>
                                <span className="submenu-title">
                                    <Link to={paths.tag_add} className="md-color-blue-500">
                                        <i className="material-icons md-color-blue-500">&#xE145;</i>
                                        Tag
                                    </Link>
                                </span>

                            </li>
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
                                <span className="submenu-title">
                                    <Link to='/reports/companies'>
                                        Companies
                                    </Link>
                                 </span>
                            </li>

                            <li>
                                <span className="submenu-title">
                                    <Link to='/reports/users'>
                                    Users
                                    </Link>
                                </span>
                            </li>
                            <li>
                                <span className="submenu-title">
                                         <Link to='/reports/custom'>
                                         Custom
                                         </Link>
                                </span>
                            </li>
                            <li>
                                <span className="submenu-title">
                                    <Link to={paths.report_add} className="md-color-blue-500">
                                        <i className="material-icons md-color-blue-500">&#xE145;</i>
                                     Report
                                    </Link>
                                </span>
                            </li>
                            <li>
                                   <span className="submenu-title">
                                        <Link to='/reports/custom'>
                                            Custom report 1
                                        </Link>
                                   </span>
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