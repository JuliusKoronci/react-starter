import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {renderField,renderTextarea} from '../field.tpl';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router';
import {generateRoute} from '../../../config/router';

class ProjectForm extends Component {

    render() {
        const {handleSubmit,heading} = this.props;
        const fieldDisabled=this.props.formDisabled;


        return (
            <div className="md-card">
                <form onSubmit={handleSubmit}>
                    <div className="md-card-content">
                        <div className="uk-margin-bottom" data-uk-margin>
                            <h1 className="heading_b uk-margin-bottom">{heading}</h1>
                        </div>
                        <hr/>
                        <div className="uk-width-medium-1-1">
                            <div className="uk-margin-bottom">

                                <Field type="checkbox" name="is_active" validate={[]} component={renderField}
                                label="Active" disabled={fieldDisabled} />
                               
                            </div>
                            <div className="uk-margin-bottom">
                                <label className="inline-label">Project name</label>
                                <Field type="text" name="title" validate={[]} component={renderField} disabled={fieldDisabled} />
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Description</label>
                                <Field type="textarea" name="description" validate={[]} component={renderTextarea} disabled={fieldDisabled} />
                            </div>
                            <div className="uk-margin-bottom">
                                <Link className="md-btn md-btn-danger" to={generateRoute('projects')}>{ this.props.project && this.props.project.canEdit ?'Cancel':'Close'}</Link>
                                { (!this.props.project || (this.props.project && this.props.project.canEdit) ) && <button className="md-btn md-btn-primary alignright" href="settings_projects.html">Save</button> }
                            </div>
                        </div>
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
            initialValues: project.length > 0 ? project[0] : {},
            formDisabled:!(project.length > 0 && project[0].canEdit),
        };
    }
    return {};

}

ProjectForm = reduxForm({
    form: 'ProjectForm',
    enableReinitialize: true
})(ProjectForm);

export default connect(mapStateToProps)(ProjectForm);
