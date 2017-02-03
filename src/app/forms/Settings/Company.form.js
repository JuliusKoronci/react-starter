import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {required, phone, alphanum, number} from '../../../config/validation';
import {renderField} from '../field.tpl';
import DeleteButton from '../../components/Main/_partials/DeleteButton';

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
                        <div className="uk-width-medium-1-2">
                            <form onSubmit={handleSubmit}>

                                <Field name="is_active" type="checkbox" validate={[]} component={renderField}
                                       label="Active"/>

                                <Field name="title" type="text" validate={[required]} component={renderField}
                                       label="Company name" value="copmany"/>

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

                                    {this.props.params.companyId && <DeleteButton handleDelete={handleDelete} id={parseInt(this.props.params.companyId, 10)} />}

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
    console.log(companyAttributeId);
    const companyAttribute = state.companyAttributes.data.filter((companyAttribute) => parseInt(companyAttribute.id, 10) === parseInt(companyAttributeId, 10));
    return {
        companyAttribute: companyAttribute.length > 0 ? companyAttribute[0] : false,
    };

}

CompanyAddForm = reduxForm({
    form: 'companyAddForm'
})(CompanyAddForm);

export default connect(mapStateToProps)(CompanyAddForm);

