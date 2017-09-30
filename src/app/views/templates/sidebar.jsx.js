import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {generateRoute, paths} from '../../../config/router';
import {sort_by} from '../../services/general';

const sidebar = ({filters, projects, tags, createTask, params, menuToggleActive, loggedUserAcl,location}) => {

    const projectId = params.projectId;
    const filterId = params.filterId;
    const tagId = params.tagId;
    const reportId = params.reportId;

    //aby boli otvorene menu Projects,Tags,Reports
    const projectsOpen = true;
    const archivedProjectsOpen = false;
    const tagsOpen = false;
    const reportsOpen = false;



    projects.sort(sort_by('title', false, function(a){return a.toUpperCase()}));

    let archivedProjects=projects.filter(project=>{if (!project.is_active) return project});
    archivedProjects.sort(sort_by('title', false, function(a){return a.toUpperCase()}));
    projects=projects.filter(project=>{if (project.is_active) return project});

    tags.sort(sort_by('title', false, function(a){return a.toUpperCase()}));





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
                {/*<ul>*/}
                    {/*<li>*/}
                        {/*<Link onClick={createTask}>*/}
                            {/*<span className="menu_icon"><i*/}
                                {/*className="material-icons md-color-blue-500">&#xE145;</i></span>*/}
                            {/*<span className="menu_title md-color-blue-500">NEW TASK</span>*/}
                        {/*</Link>*/}
                    {/*</li>*/}
                {/*</ul>*/}
                <ul>
                    <li>
                        <Link to={'/tasks/create'}
                              className={location.pathname==='/tasks/create'?'active md-color-deep-orange-500':'md-color-blue-500'} >
                            <span className="menu_icon"><i
                                className={location.pathname==='/tasks/create'?'material-icons md-color-deep-orange-500':'material-icons md-color-blue-500'}>&#xE145;</i></span>
                            <span className="menu_title ">CREATE TASK</span>
                        </Link>
                    </li>
                </ul>
                <ul>
                  <li>
                      <Link to='/filter'
                            className={location.pathname==='/filter'?'active md-color-deep-orange-500':'md-color-blue-500'} >
                          <span className="menu_icon"><i
                            className={location.pathname==='/filter'?'material-icons md-color-deep-orange-500':'material-icons md-color-blue-500'}>
                            &#xE145;</i></span>
                          <span className="menu_title">FILTER</span>
                      </Link>
                  </li>
                </ul>
                <ul>
                    {filters.map((filt, i) => {
                        return (
                            <li key={i} title="FILTER">
                                {/*<Link to={'/dashboard/' + filt.id}*/}
                                {/*{filt.public?'public':'private'}*/}
                                <Link to={'/filter/' + filt.id}
                                      className={parseInt(filt.id,10)===parseInt(filterId,10)?'active md-color-deep-orange-500':''} >
                                    {/*<span className="menu_icon"><i className="material-icons" >{filt.icon_class}</i></span>*/}
                                    {/*<span className="menu_icon"><i className="material-icons" dangerouslySetInnerHTML={{__html: filt.icon_class}} /></span>*/}
                                    <span className="menu_icon"><i className="material-icons" >&#xE152;</i></span>
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
                    <li className={projectId?"submenu_trigger act_section":'submenu_trigger'}>

                        <a href="#" onClick={menuToggleActive.bind(null)} className={projectsOpen?'active':''}>
                            <span className="menu_icon"><i className="material-icons">&#xE2C8;</i></span>
                            <span className="menu_title">Projects</span>
                        </a>

                        <ul>
                            {projects.map((project, i) => {
                                const link = generateRoute('project_tasks', {projectId: project.id});
                                const linkEdit = generateRoute('project_edit', {projectId: project.id});

                                return <li key={i}>

                                   <span className="submenu-title">
                                     <Link to={link}
                                           className={parseInt(project.id,10)===parseInt(projectId,10)?'active md-color-deep-orange-500':''}>
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

                            { loggedUserAcl.indexOf('create_projects')!==-1 && <li>
                                <span className="submenu-title">
                                    <Link to={paths.project_add} className="md-color-blue-500">
                                        <i className="material-icons md-color-blue-500">&#xE145;</i>
                                        Project
                                    </Link>
                                </span>
                            </li>
                            }
                        </ul>
                    </li>




                    {/*sidebar menu - archived projects */}
                    <li className={projectId?"submenu_trigger act_section":'submenu_trigger'}>

                        <a href="#" onClick={menuToggleActive.bind(null)} className={archivedProjectsOpen?'active':''}>
                            <span className="menu_icon"><i className="material-icons">&#xE2C8;</i></span>
                            <span className="menu_title">Archived projects</span>
                        </a>

                        <ul>
                            {archivedProjects.map((project, i) => {
                                const link = generateRoute('project_tasks', {projectId: project.id});
                                const linkEdit = generateRoute('project_edit', {projectId: project.id});

                                return <li key={i}>

                                   <span className="submenu-title">
                                     <Link to={link}
                                           className={parseInt(project.id,10)===parseInt(projectId,10)?'active md-color-deep-orange-500':''}>
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

                        </ul>
                    </li>


                    {/*sidebar menu tags */}
                    <li className={tagId?"submenu_trigger act_section":'submenu_trigger'}>
                        <a href="#" onClick={menuToggleActive.bind(null)} className={tagsOpen?'active':''}>
                            <span className="menu_icon"><i className="material-icons">&#xE893;</i></span>
                            <span className="menu_title">Tags</span>
                        </a>

                        <ul >
                            {tags.map((tag, i) => {
                                const link = generateRoute('tag_tasks', {tagId: tag.id});
                                const linkEdit = generateRoute('tag_edit', {tagId: tag.id});

                                return <li key={i}>
                                    <span className="submenu-title">
                                        <Link to={link}
                                              className={parseInt(tag.id,10)===parseInt(tagId,10)?'active  md-color-deep-orange-500':''}>
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
                    { loggedUserAcl.indexOf('report_filters') !== -1 &&
                    <li className={reportId ? "submenu_report act_section" : 'submenu_trigger'}>
                        <a href="#" onClick={menuToggleActive.bind(null)} className={reportsOpen ? 'active' : ''}>
                            <span className="menu_icon"><i className="material-icons">&#xE85C;</i></span>
                            <span className="menu_title">Reports</span>
                        </a>
                        <ul>
                            <li>
                                <span className="submenu-title">
                                    <Link
                                        to='/reports/companies'>
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
                                        <Link to='/reports/custom'>
                                            Custom report 1
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
                        </ul>
                    </li>
                    }

                </ul>
            </div>
        </aside>
    );
};

sidebar.propTypes = {
    filters: PropTypes.array.isRequired
};

export default sidebar;
