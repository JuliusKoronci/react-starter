import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {renderField} from '../field.tpl';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router';
import {generateRoute} from '../../../config/router';

class ProjectAclForm extends Component {


    componentWillReceiveProps(nextProps){
        if(this.props.dirty!==nextProps.dirty) {
            this.props.dispatchIsDirty(nextProps.form, nextProps.dirty, nextProps.pristine);
        }
    }


    onChange=(fieldName,e)=>{
        let checked=e.target.checked;
        let value=e.target.name;

        const valuesBefore=this.props.thisForm['ProjectAclForm'].values[fieldName].split(',');


        if(valuesBefore.indexOf(value)===-1 && checked){
            let newValues=valuesBefore;
            newValues.push(value);
            this.props.change(fieldName, newValues.join());

        }else if(valuesBefore.indexOf(value)!==-1 && !checked){
            let newValues=valuesBefore.length>0? valuesBefore.filter((val)=>{if(val!==value)return val;return null;}) : [];
            this.props.change(fieldName, newValues.join());

        }

    };


    render() {

        // console.log(this.props);

        const {handleSubmit} = this.props;

        const acls=['view_own_tasks','view_tasks_from_users_company','view_all_tasks',
            'create_task','resolve_task','delete_task',
            'view_internal_note','edit_internal_note','edit_project'];

        return (
            <div className="md-card">

                <h1>form dirty:{this.props.formDirty?'true':'false'} ** form redux dirty:{this.props.dirty?'true':'false'}</h1>

                <form onSubmit={handleSubmit}>
                    <div className="md-card-content">
                        
                        <table className="uk-table uk-table-align-vertical">
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



                            {this.props.project.userHasProjects.map((user, i) =>{
                                const fieldName='user'+user.user.id;
                                // let fieldValue=user.acl.join(',');
                                let fieldValue=user.acl;

                                return <tr key={i}>
                                    <td>{user.user.username}</td>

                                        {acls.map((acl,i)=>{


                                            let key=user.user.id+'.'+this.props.project.id+'.'+acl;

                                            return <td className="uk-text-center" key={key}>
                                                <div className="icheckbox_md">
                                                    <input type="checkbox" name={acl} defaultChecked={(user.acl.indexOf(acl)!==-1)} onChange={this.onChange.bind(null,fieldName)} />
                                                </div>
                                            </td>
                                            }
                                        )}


                                    <td className="uk-text-center">
                                        <Field type="hidden" name={fieldName} validate={[]} component={renderField} value={fieldValue} />
                                        <button onClick={this.props.removeUser.bind(null,user.user.id)} className="md-btn md-btn-danger">Delete</button>
                                    </td>
                                </tr>
                            })
                            }
                            </tbody>
                        </table>
                        <div className="uk-margin">
                            <Link className="md-btn md-btn-danger" to={generateRoute('projects')}>Cancel</Link>
                            <button type="submit" className="md-btn md-btn-primary alignright">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const projectId = ownProps.params.projectId;
    // const project = ownProps.project;
    // const project = state.projects.data.filter((project) => parseInt(project.id, 10) === parseInt(projectId, 10));
    const project = state.system.menu.projects.filter((project) => parseInt(project.id, 10) === parseInt(projectId, 10));
    const thisForm=state.form;

    if (project.length > 0) {
        let initialValues={};
        let fields=[];
            project[0].userHasProjects.map((user, i) => {
                let fieldName = 'user' + user.user.id;
                let value=user.acl.join(',');
                initialValues[fieldName]=value;
                fields.push(fieldName);
                return null;
            });

        return {
            thisForm,
            initialValues:initialValues,
            fields,
            enableReinitialize: true,
        };
    }
    return {thisForm};

}

ProjectAclForm = reduxForm({
    form: 'ProjectAclForm',
    enableReinitialize: true,
})(ProjectAclForm);

export default connect(mapStateToProps)(ProjectAclForm);
