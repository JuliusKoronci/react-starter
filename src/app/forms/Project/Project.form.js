import React, {PropTypes} from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {renderField,renderTextarea} from '../field.tpl';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router';
import {generateRoute} from '../../../config/router';

class ProjectForm extends Component {

    render() {
        const {handleSubmit,heading} = this.props;
        return (
            <div className="md-card">
                <form onSubmit={handleSubmit}>
                    <div className="md-card-content">
                        <div className="uk-margin-bottom" data-uk-margin>
                            <h1 className="heading_b uk-margin-bottom">{heading}</h1>
                        </div>
                        <hr/>
                        <div className="uk-width-medium-1-1 max-width-1000px">
                            <div className="uk-margin-bottom">
                                <Field type="checkbox" name="is_active" validate={[]} component={renderField}/>
                                <label className="uk_dp1 uk-text-muted">Active</label>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Project name</label>
                                <Field type="text" name="title" validate={[]} component={renderField}/>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Description</label>
                                <Field type="textarea" name="description" validate={[]} component={renderTextarea}/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Link className="md-btn md-btn-danger" to={generateRoute('projects')}>Cancel</Link>
                                <button className="md-btn md-btn-primary alignright" href="settings_projects.html">Save</button>
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
        };
    }
    return {};

}

ProjectForm = reduxForm({
    form: 'ProjectForm',
    enableReinitialize: true
})(ProjectForm);

export default connect(mapStateToProps)(ProjectForm);
