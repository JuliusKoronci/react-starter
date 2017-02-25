import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {required} from '../../../config/validation';
import {renderField, renderSelect, renderTagger} from '../field.tpl';
import Tag from '../../forms/tagger.jsx';
import DeleteButton from '../../components/Main/_partials/DeleteButton';

class CompanyAttributeForm extends Component {

    constructor(props, context){
        super(props, context);
        this.state={customValueEnabled: false};

    }

    componentDidUpdate(){

        // console.log('did update');
        if(this.props.currentValues && this.props.currentValues.type){
            // console.log(this.props.currentValues.type);
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
        if(this.props.companyAttribute){
            this.props.companyAttribute.options=values;
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
                                           label="Company custom field name"/>
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

                                    {/*<Tag name="options" input={{name:'options'}} options={options} tagValues={{}} setValues={setCustomValues}/>*/}
                                    {/*<Field name="options" actions={{setValues:this.setCustomValues}}  options={this.props.companyAttribute?this.props.companyAttribute.options:{}} validate={[]} component={Tag}*/}
                                           {/*label="Type"/>*/}

                                    {/*<Field name="options" type="text" options={this.props.companyAttribute?this.props.companyAttribute.options:{}} validate={[]} component={renderField}*/}
                                           {/*label="Type"/>*/}

                                    {/*<Field name="options" icon="true" tagValues={this.state.optionValues} validate={[]} setValues={this.setCustomValues} component={renderTagger}*/}
                                           {/*label="Tag"/>*/}

                                    {/*<Field name="options2" icon="true" tagValues={this.state.optionValues} validate={[]} setValues={this.setCustomValues} component={Tag}*/}
                                           {/*label="Tag"/>*/}

                                    {/*<Tag name="options1" tagValues={this.state.options} setValues={this.props.setCustomValues}/>*/}

                                </div>}

                                <div className="uk-margin">
                                    <div className="uk-margin-medium-top">
                                        <div className="uk-text-danger">{formError}</div>
                                    </div>

                                    {this.props.params.companyAttributeId && <DeleteButton handleDelete={handleDelete}
                                                                                           id={parseInt(this.props.params.companyAttributeId, 10)}/>}

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
    const companyAttributeId = ownProps.params.companyAttributeId;
    const companyAttribute = state.companyAttributes.data.filter((companyAttribute) => parseInt(companyAttribute.id, 10) === parseInt(companyAttributeId, 10));
    const currentValues=state.form['companyAttributeForm'];

    if (companyAttribute.length > 0) {
        return {
            initialValues: companyAttribute.length > 0 ? companyAttribute[0] : false,
            currentValues: (currentValues && currentValues.values?currentValues.values:{})
        };
    } else {
        return {
            currentValues: (currentValues && currentValues.values?currentValues.values:{})
        };
    }


}

CompanyAttributeForm = reduxForm({
    form: 'companyAttributeForm'
})(CompanyAttributeForm);

export default connect(mapStateToProps)(CompanyAttributeForm);


