import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';
import {Field, reduxForm} from 'redux-form';
import {required, minLength8, phone, alphanum, number} from '../../../config/validation';
import {renderField} from '../field.tpl';

class CompanyAddForm extends Component {
    render() {
        const {handleSubmit, formError} = this.props;
        return (

            <div className="md-card">
                <div className="md-card-content">
                    <div className="uk-margin-bottom" data-uk-margin>
                        <h1 className="heading_b uk-margin-bottom">Add company</h1>
                    </div>
                    <hr/>

                    <form onSubmit={handleSubmit}>


                        <Field name="title" type="text" validate={[required]} component={renderField}
                               label="Company name" value="company" />

                        <Field name="ico" type="text" validate={[number]} component={renderField}
                               label="ICO"/>

                        <Field name="dic" type="text" validate={[number]} component={renderField}
                               label="DIC"/>

                        <Field name="ic_dph" type="text" validate={[alphanum]} component={renderField}
                               label="IC DPH"/>

                        <Field name="phone" type="text" validate={[phone]} component={renderField}
                               label="Phone"/>

                        <Field name="street" type="text" validate={[]} component={renderField}
                               label="Street"/>

                        <Field name="city" type="text" validate={[]} component={renderField}
                               label="City"/>

                        <Field name="psc" type="text" validate={[alphanum]} component={renderField}
                               label="PSC"/>

                        <Field name="country" type="text" validate={[]} component={renderField}
                               label="Country"/>


                        <div className="uk-margin-medium-top">
                            <div className="uk-text-danger">{formError}</div>
                        </div>
                        <div className="uk-margin-medium-top">
                            <button className="md-btn md-btn-primary md-btn-block md-btn-large" type="submit">
                                SAVE
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        );
    }
}

CompanyAddForm = reduxForm({
    form: 'companyAddForm'
})(CompanyAddForm);

export default CompanyAddForm;
