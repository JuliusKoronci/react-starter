import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {renderField, renderWswg} from '../field.tpl';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router';
import {generateRoute} from '../../../config/router';

class ProjectForm extends Component {




    componentWillReceiveProps(nextProps){
        // console.log('will receive',nextProps);
        // console.log('will receive');

        // console.log(this.props)






        // if(nextProps.dirty){
        //     // alert('receiving dirty');
        //
        //     console.log('%cNEXT PROPS: %c receiving dirty from redux! ','background:black;color:red;', 'background: #222; color: #bada55');
        //
        //     console.log(this.props.initialValues);
        //     console.log(this.props.project);
        //
        //     console.log((JSON.stringify(this.props.initialValues) === JSON.stringify(this.props.project)?'%cequals':'%cdiffer'),'color:blue');
        //
        //     // console.log(nextProps.project);
        //     // console.log(this.props);
        //     // console.log(nextProps);
        // }

        if(this.props.dirty!==nextProps.dirty) {

            // alert('dispatching '+nextProps.dirty)
            // console.log('%c dispatching dirty '+nextProps.dirty+' from next props', 'background: #222; color: #bada55');
            this.props.dispatchIsDirty(nextProps.form, nextProps.dirty, nextProps.pristine);
        }
    }
    //
    // componentWillUpdate(){
    //     console.log('will update');
    // }
    // componentDidUpdate(){
    //     console.log('did update');
    // }

    // componentWillUpdate(){
    //     this.props.dispatchIsDirty(this.props.form,this.props.dirty,this.props.pristine);
    // }
    //
    // componentDidUpdate(){
    //     this.props.dispatchIsDirty(this.props.form,this.props.dirty,this.props.pristine);
    // }


    render() {
        const {handleSubmit,heading} = this.props;
        const fieldDisabled=this.props.formDisabled;


        // console.log(this.props)
        // console.log(this.props.isDirty)

        return (
            <div className="md-card">


                {/*<h1>form dirty:{this.props.formDirty?'true':'false'} ** form redux dirty:{this.props.dirty?'true':'false'} pristine:{this.props.pristine?'true':'false'}</h1>*/}
                {/*<h2>{this.props.anyTouched?'touched':'not touched'}</h2>*/}
                <form onSubmit={handleSubmit} >
                    <div className="md-card-content">
                        <div className="uk-margin-bottom" data-uk-margin>
                            <h1 className="heading_b uk-margin-bottom">{heading}</h1>
                            {/*{this.props.formDirty?<h2>DIRTY</h2>:''}*/}
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
                                {/*<label>Description</label>*/}
                                {/*<Field type="textarea" name="description" className="md-input" validate={[]} component={renderTextarea} disabled={fieldDisabled} />*/}

                                <Field type="textarea" name="description" label="Description" className="md-input" validate={[]} component={renderWswg} disabled={fieldDisabled} />
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
    // const project = state.projects.data.filter((project) => parseInt(project.id, 10) === parseInt(projectId, 10));
    // const project = state.system.menu.projects.filter((project) => parseInt(project.id, 10) === parseInt(projectId, 10));
    const project = ownProps.project;


    // alert('mapping to props')

    // if (project.length > 0) {
    //     return {
    //         enableReinitialize: true,
    //         keepDirtyOnReinitialize:false,
    //         initialValues: project.length > 0 ? project[0] : {},
    //         formDisabled:!(project.length > 0 && project[0].canEdit),
    //     };
    // }
    //
    if (project) {
        console.log('%c IS PROJECT IN PROPS','color:red;');
        return {
            enableReinitialize: true,
            keepDirtyOnReinitialize:false,
            initialValues: project,
            formDisabled:!(project.canEdit),
        };
    }


    console.log('%c IS PROJECT ISNT IN PROPS','color:purple;');
    return {
        enableReinitialize: true,
        keepDirtyOnReinitialize:false,
        initialValues:{'is_active':true},
    };

}

ProjectForm = reduxForm({
    form: 'ProjectForm',
    enableReinitialize: true,
    keepDirtyOnReinitialize:false,
})(ProjectForm);

export default connect(mapStateToProps)(ProjectForm);
