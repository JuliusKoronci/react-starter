import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {required} from '../../../config/validation';
import {renderField, renderSelect, renderTagger} from '../field.tpl';


class TaskAttributeForm extends Component {

    constructor(props, context){
        super(props, context);
        this.state={customValueEnabled: false};

    }

    componentDidUpdate(){

        if(this.props.currentValues && this.props.currentValues.type){
            if(this.props.config.customValuesEnabledOn.indexOf(this.props.currentValues.type)!=-1){
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

        const options=[
            {id:'input',title:'Input',},
            {id:'text_area',title:'Text area'},
            {id:'simple_select',title:'Simple select'},
            {id:'multi_select',title:'Multiselect',customValueEnabled:true},
            {id:'checkbox',title:'Checkbox',customValueEnabled:true},
            {id:'date',title:'Date'},
            {id:'integer_number',title:'Number'},
            {id:'decimal_number',title:'Decimal number'}
            ];

        return (
            <div className="md-card">
                <div className="md-card-content">
                    <div className="uk-margin-bottom" data-uk-margin>
                        <h1 className="heading_b uk-margin-bottom">{this.props.heading}</h1>
                    </div>
                    <hr/>
                    <div className="uk-grid">
                        <div className="uk-width-medium-1-2">

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
                                    <Field name="description" type="text" validate={[required]} component={renderField}
                                           label="Description"/>
                                </div>

                                <div className="uk-margin">
                                    <Field name="type" type="select" options={options} validate={[required]} component={renderSelect}
                                           label="Type"/>
                                </div>



                                {this.state.customValueEnabled &&
                                <div className="uk-margin">
                                    <h2>Add custom field values</h2>
                                    <Field name="options" setValues={this.setValues} tagValues={this.state.customValues} options={options} validate={[]} component={renderTagger}
                                           label="Custom values"/>
                                </div>}

                                <div className="uk-margin">
                                    <div className="uk-margin-medium-top">
                                        <div className="uk-text-danger">{formError}</div>
                                    </div>

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
            currentValues: (currentValues && currentValues.values?currentValues.values:{})
        };
    }


}

TaskAttributeForm = reduxForm({
    form: 'taskAttributeForm'
})(TaskAttributeForm);

export default connect(mapStateToProps)(TaskAttributeForm);

