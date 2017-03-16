import React, {PropTypes} from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {renderField,renderTextarea} from '../field.tpl';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router';
import {generateRoute} from '../../../config/router';

class ProjectAclForm extends Component {

    render() {
        const {handleSubmit,heading} = this.props;
        return (
            <div className="md-card">
                <form onSubmit={handleSubmit}>
                    <div className="md-card-content">
                        
                        <table className="uk-table uk-text-nowrap">
                            <thead>
                            <tr>
                                <th>User</th>
                                <th className="uk-text-center">View own tasks</th>
                                <th className="uk-text-center">View task user's company</th>
                                <th className="uk-text-center">View all tasks</th>
                                <th className="uk-text-center">Create task</th>
                                <th className="uk-text-center">Resolve task</th>
                                <th className="uk-text-center">Delete task</th>
                                <th className="uk-text-center">View internal note </th>
                                <th className="uk-text-center">Edit internal note </th>
                                <th className="uk-text-center">Edit project permissions </th>
                                <th className="uk-text-center">Remove user from project?</th>
                            </tr>
                            </thead>
                            <tbody>



                            {/*'view_own_tasks','view_tasks_from_users_company','view_all_tasks',
                            'create_task','resolve_task','delete_task',
                            'view_internal_note','edit_internal_note','edit_project'*/}

                            {this.props.project.userHasProjects.map((user, i) =>{

                                return <tr key={i}>
                                    <td>{user.user.username}</td>
                                    <td className="uk-text-center">
                                        <div className="icheckbox_md"><input type="checkbox" name="view_own_tasks"
                                                                             defaultChecked={(user.acl.indexOf('view_own_tasks')!==-1)}
                                                                             data-md-icheck=""/>
                                            <ins className="iCheck-helper"/>
                                        </div>
                                    </td>
                                    <td className="uk-text-center">
                                        <div className="icheckbox_md"><input type="checkbox"
                                                                             name="view_tasks_from_users_company"
                                                                             
                                                                             data-md-icheck=""/>
                                            <ins className="iCheck-helper"/>
                                        </div>
                                    </td>
                                    <td className="uk-text-center">
                                        <div className="icheckbox_md"><input type="checkbox" name="view_all_tasks"
                                                                             
                                                                             data-md-icheck=""/>
                                            <ins className="iCheck-helper"/>
                                        </div>
                                    </td>
                                    <td className="uk-text-center">
                                        <div className="icheckbox_md"><input type="checkbox" name="create_task"
                                                                             
                                                                             data-md-icheck=""/>
                                            <ins className="iCheck-helper"/>
                                        </div>
                                    </td>
                                    <td className="uk-text-center">
                                        <div className="icheckbox_md"><input type="checkbox" name="resolve_task"
                                                                             
                                                                             data-md-icheck=""/>
                                            <ins className="iCheck-helper"/>
                                        </div>
                                    </td>
                                    <td className="uk-text-center">
                                        <div className="icheckbox_md"><input type="checkbox" name="delete_task"
                                                                             
                                                                             data-md-icheck=""/>
                                            <ins className="iCheck-helper"/>
                                        </div>
                                    </td>
                                    <td className="uk-text-center">
                                        <div className="icheckbox_md"><input type="checkbox" name="view_internal_note"
                                                                             
                                                                             data-md-icheck=""/>
                                            <ins className="iCheck-helper"/>
                                        </div>
                                    </td>
                                    <td className="uk-text-center">
                                        <div className="icheckbox_md"><input type="checkbox" name="edit_internal_note"
                                                                             
                                                                             data-md-icheck=""/>
                                            <ins className="iCheck-helper"/>
                                        </div>
                                    </td>
                                    <td className="uk-text-center">
                                        <div className="icheckbox_md"><input type="checkbox" name="edit_project"
                                                                             
                                                                             data-md-icheck=""/>
                                            <ins className="iCheck-helper"/>
                                        </div>
                                    </td>
                                    <td className="uk-text-center">
                                        <button onClick={this.props.removeUser.bind(null,user.user.id)} className="md-btn md-btn-danger">Delete</button>
                                    </td>
                                </tr>
                            })
                            }
                            </tbody>
                        </table>
                        <button type="submit" className="md-btn md-btn-primary" >Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const projectId = ownProps.params.projectId;
    const project = state.projects.data.filter((project) => parseInt(project.id, 10) === parseInt(projectId, 10));

    if (project.length > 0) {
        return {
            initialValues: {userHasProjects: project.length > 0 ? project[0]['userHasProjects'] : []},
        };
    }
    return {};

}

ProjectAclForm = reduxForm({
    form: 'ProjectAclForm',
    enableReinitialize: true
})(ProjectAclForm);

export default connect(mapStateToProps)(ProjectAclForm);
