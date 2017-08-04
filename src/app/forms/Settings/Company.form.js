import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {required, phone, alphanum, number} from '../../../config/validation';
import {renderField} from '../field.tpl';
import {Link} from 'react-router';
import {generateRoute} from '../../../config/router';


class CompanyAddForm extends Component {



    // componentDidUpdate(){
    //     console.log(this.props.company);
    // }


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
                        <div className="uk-width-medium-1-1 max-width-1000px">
                            <form onSubmit={handleSubmit}>

                                <Field name="is_active" type="checkbox" validate={[]} component={renderField}
                                       label="Active"/>

                                <Field name="title" type="text" validate={[required]} component={renderField}
                                       label="Company name"/>

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
                                    <Link className="md-btn md-btn-danger" to={generateRoute('companies')}>Cancel</Link>
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
    const companyId = ownProps.params.companyId;
    const company = state.companies.data.filter((company) => parseInt(company.id, 10) === parseInt(companyId, 10));

    if (company.length > 0) {
        return {
            initialValues: company[0],
            enableReinitialize: true
        };
    }

    return {initialValues:{'is_active':true},enableReinitialize: true};

}

CompanyAddForm = reduxForm({
    form: 'companyAddForm'
})(CompanyAddForm);

export default connect(mapStateToProps)(CompanyAddForm);

