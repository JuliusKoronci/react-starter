import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {required} from '../../../config/validation';
import {renderField} from '../field.tpl';
import DeleteButton from '../../components/Main/_partials/DeleteButton';
import {Link} from 'react-router';
import {generateRoute} from '../../../config/router';


class SmtpForm extends Component {



    // componentDidUpdate(){
    //     console.log(this.props.company);
    // }


    render() {
        const {handleSubmit, formError, handleDelete, heading, editing} = this.props;
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
                                <Field name="email" type="text" validate={[required]} component={renderField}
                                       label="Email"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="host" type="text" validate={[required]} component={renderField} label="SMTP Server"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="port" type="text" validate={[required]} component={renderField} label="Port"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="name" type="text" validate={[required]} component={renderField} label="Login"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="password" type="text" validate={[required]} component={renderField} label="Password"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field type="checkbox" name="ssl" validate={[]} component={renderField}/>
                                <label className="uk_dp1 uk-text-muted">SSL</label>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field type="checkbox" name="tls" validate={[]} component={renderField}/>
                                <label className="uk_dp1 uk-text-muted">TLS</label>
                            </div>
                            <h3>Test smtp</h3>
                            <div className="uk-margin-bottom">
                                <label>email for send test mail</label>
                                <input type="text" className="md-input label-fixed"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <a className="md-btn md-btn-success" href="settings_units.html">SEND</a>
                            </div>
                            <div className="uk-margin-bottom">
                                <Link className="md-btn md-btn-danger" to={generateRoute('smtps')}>Cancel</Link>
                                {editing && this.props.smtp.id&& <DeleteButton handleDelete={handleDelete} id={this.props.smtp.id} />}
                                <button className="md-btn md-btn-primary alignright" type="submit">
                                    SAVE
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


        );
    }
}


function mapStateToProps(state, ownProps) {
    const smtpId = ownProps.params.smtpId;
    const smtp = state.smtps.data.filter((smtp) => parseInt(smtp.id, 10) === parseInt(smtpId, 10));

    if (smtp.length > 0) {
        return {
            initialValues: smtp.length > 0 ? smtp[0] : {},
        };
    }
    return {};

}

SmtpForm = reduxForm({
    form: 'smtpForm'
})(SmtpForm);

export default connect(mapStateToProps)(SmtpForm);

