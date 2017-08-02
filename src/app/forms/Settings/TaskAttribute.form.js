import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {required} from '../../../config/validation';
import {renderField, renderSelect, renderTagger} from '../field.tpl';
import {Link} from 'react-router';
import {generateRoute} from '../../../config/router';



class TaskAttributeForm extends Component {

    constructor(props, context){
        super(props, context);
        this.state={customValueEnabled: false};

    }

    componentDidUpdate(){

        if(this.props.currentValues && this.props.currentValues.type){
            if(this.props.config.customValuesEnabledOn.indexOf(this.props.currentValues.type)!==-1){
                if(!this.state.customValueEnabled) {
                    this.setState({customValueEnabled: true})
                }
            }
            else{
                if(this.state.customValueEnabled) {
                    this.setState({customValueEnabled: false})
                }
            }
            }

    };


    render() {
        const {handleSubmit, formError, handleDelete, customAttributeTypes, toggleActive} = this.props;

        return (
            <div className="md-card">
                <div className="md-card-content">
                    <div className="uk-margin-bottom" data-uk-margin>
                        <h1 className="heading_b uk-margin-bottom">{this.props.heading}</h1>
                    </div>
                    <hr/>
                    <div className="uk-grid">
                        <div className="uk-width-medium-1-1 max-width-1000px">

                            <form onSubmit={handleSubmit}>

                                <div className="uk-margin">
                                <Field name="is_active" type="checkbox" validate={[]} component={renderField}
                                       label="Active" />
                                </div>


                                <div className="uk-margin">
                                    <Field name="title" type="text" validate={[required]} component={renderField}
                                           label="Task attribute name"/>
                                </div>

                                <div className="uk-margin">
                                    <Field name="description" type="text" validate={[]} component={renderField}
                                           label="Description"/>
                                </div>

                                <div className="uk-margin">
                                    <Field name="type" type="select" options={customAttributeTypes} validate={[required]} component={renderSelect}
                                           label="Type"/>
                                </div>



                                {this.state.customValueEnabled &&
                                <div className="uk-margin">
                                    <h2>Add custom field values</h2>
                                    <Field name="options" setValues={this.setValues} tagValues={this.state.customValues} validate={[]} component={renderTagger}
                                           label="Custom values"/>
                                </div>}

                                <div className="uk-margin">
                                    <div className="uk-margin-medium-top">
                                        <div className="uk-text-danger">{formError}</div>
                                    </div>
                                    <Link className="md-btn md-btn-danger" to={generateRoute('task_attributes')}>Cancel</Link>
                                    <button className="md-btn md-btn-primary alignright" type="submit">
                                        SAVE
                                    </button>


                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


function mapStateToProps(state, ownProps) {
    const taskAttributeId = ownProps.params.taskAttributeId;
    const taskAttribute = state.taskAttributes.data.filter((taskAttribute) => parseInt(taskAttribute.id, 10) === parseInt(taskAttributeId, 10));
    const currentValues=state.form['taskAttributeForm'];

    if (taskAttribute.length > 0) {
        return {
            initialValues: taskAttribute.length > 0 ? taskAttribute[0] : false,
            currentValues: (currentValues && currentValues.values?currentValues.values:{})
        };
    } else {
        return {
            currentValues: (currentValues && currentValues.values?currentValues.values:{}),
            initialValues:{'is_active':true}
        };
    }


}

TaskAttributeForm = reduxForm({
    form: 'taskAttributeForm'
})(TaskAttributeForm);

export default connect(mapStateToProps)(TaskAttributeForm);


