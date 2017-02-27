import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {required} from '../../../config/validation';
import {renderField, renderSelect, renderTagger} from '../field.tpl';
import DeleteButton from '../../components/Main/_partials/DeleteButton';

class UserAttributeForm extends Component {

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

    setCustomValues=(values)=>{
        alert('set custom values');
        console.log(values);
        this.setState({'optionValues':values});
        if(this.props.userAttribute){
            this.props.userAttribute.options=values;
        }


    };

    setValues=()=>{
        console.log('set values');
    };


    render() {
        const {handleSubmit, formError, handleDelete, setCustomValues} = this.props;

        const options=[
            {id:'input',title:'Input',},
            {id:'textarea',title:'Text area'},
            {id:'multi_select',title:'Select',customValueEnabled:true},
            {id:'checkbox',title:'Checkbox',customValueEnabled:true},
            {id:'date',title:'Date'},
            {id:'number',title:'Number'}
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
                                           label="Active"/>
                                </div>

                                <div className="uk-margin">
                                    <Field name="title" type="text" validate={[required]} component={renderField}
                                           label="User custom field name"/>
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

                                    {this.props.params.userAttributeId && <DeleteButton handleDelete={handleDelete}
                                                                                           id={parseInt(this.props.params.userAttributeId, 10)}/>}

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
    const userAttributeId = ownProps.params.userAttributeId;
    const userAttribute = state.userAttributes.data.filter((userAttribute) => parseInt(userAttribute.id, 10) === parseInt(userAttributeId, 10));
    const currentValues=state.form['userAttributeForm'];

    if (userAttribute.length > 0) {
        return {
            initialValues: userAttribute.length > 0 ? userAttribute[0] : false,
            currentValues: (currentValues && currentValues.values?currentValues.values:{})
        };
    } else {
        return {
            currentValues: (currentValues && currentValues.values?currentValues.values:{})
        };
    }


}

UserAttributeForm = reduxForm({
    form: 'userAttributeForm'
})(UserAttributeForm);

export default connect(mapStateToProps)(UserAttributeForm);


