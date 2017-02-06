import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {required} from '../../../config/validation';
import {renderField, renderSelect} from '../field.tpl';
import DeleteButton from '../../components/Main/_partials/DeleteButton';

class CompanyAttributeForm extends Component {

    render() {
        const {handleSubmit, formError, handleDelete} = this.props;

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
                                    <input type="checkbox" name="checkbox_demo_inline_mercury"
                                           id="checkbox_demo_inline_1"
                                           data-md-icheck/>
                                    <label className="uk_dp1 uk-text-muted">Active</label>
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
                                    <label className="uk-text-muted">Type</label>
                                    <select id="select_demo_1" className="md-input">
                                        <option value="" disabled selected hidden>Select custom field type</option>
                                        <option value="a">Input</option>
                                        <option value="b">Text area</option>
                                        <option value="c">Select</option>
                                        <option value="c">Checkbox</option>
                                        <option value="c">Date</option>
                                        <option value="c">Number</option>
                                    </select>
                                </div>

                                <div className="uk-margin">
                                    <label className="uk-text-muted">Type</label>
                                    <select id="select_demo_1" className="md-input">
                                        <option value="" disabled selected hidden>Select custom field type</option>
                                        <option value="a">Input</option>
                                        <option value="b">Text area</option>
                                        <option value="c">Select</option>
                                        <option value="c">Checkbox</option>
                                        <option value="c">Date</option>
                                        <option value="c">Number</option>
                                    </select>
                                </div>

                                <h2>Add custom field value</h2>
                                <div className="uk-margin">
                                    <label>Value</label>
                                    <input type="text" className="md-input label-fixed uk-margin-bottom"/>
                                    <a className="md-btn md-btn-primary" href="#">ADD</a>
                                </div>

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

    if (companyAttribute.length > 0) {
        return {
            initialValues: companyAttribute.length > 0 ? companyAttribute[0] : false,
        };
    } else {
        return {};
    }


}

CompanyAttributeForm = reduxForm({
    form: 'companyAttributeForm'
})(CompanyAttributeForm);

export default connect(mapStateToProps)(CompanyAttributeForm);


