import React, {PropTypes} from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {renderField} from '../field.tpl';
import {Field, reduxForm} from 'redux-form';

class SmtpForm extends Component {

    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="md-card">
                <form onSubmit={handleSubmit}>
                    <div className="md-card-content">
                        <div className="uk-margin-bottom" data-uk-margin>
                            <h1 className="heading_b uk-margin-bottom">Add SMTP</h1>
                        </div>
                        <hr/>
                        <div className="uk-width-medium-1-2">
                            <div className="uk-margin-bottom">
                                <Field type="checkbox" name="active" validate={[]} component={renderField}/>
                                <label className="uk_dp1 uk-text-muted">Active</label>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Email</label>
                                <Field type="text" name="email" validate={[]} component={renderField}/>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Server</label>
                                <Field type="text" name="host" validate={[]} component={renderField}/>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Port</label>
                                <Field type="text" name="port" validate={[]} component={renderField}/>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Login</label>
                                <Field type="text" name="login" validate={[]} component={renderField}/>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Password</label>
                                <Field type="text" name="password" validate={[]} component={renderField}/>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Project folder</label>
                                <select name="project" className="md-input label-fixed">
                                    {this.props.projects.map((p,i)=>{
                                        return (
                                            <option key={i} value={p.key}>{p.title}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field type="checkbox" name="tls" validate={[]} component={renderField}/>
                                <label className="uk_dp1 uk-text-muted">TSL</label>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field type="checkbox" name="ssl" validate={[]} component={renderField}/>
                                <label className="uk_dp1 uk-text-muted">SSL</label>
                            </div>

                            <h3>Test smtp</h3>
                            <div className="uk-margin-bottom">
                                <label>email for send test mail</label>
                                <Field type="text" name="test_email" validate={[]} component={renderField}/>
                            </div>
                            <div className="uk-margin-bottom">
                                <a className="md-btn md-btn-success" href="settings_units.html">SEND</a>

                            </div>
                            <div className="uk-margin-bottom">
                                <a className="md-btn md-btn-danger" href="#">Delete</a>
                                <button type="submit" className="md-btn md-btn-primary alignright" href="settings_smtps.html">Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};

function mapStateToProps(state, ownProps) {
    const smtpId = ownProps.params.smtpId;
    const smtp = state.imaps.data.filter((smtp) => parseInt(smtp.id, 10) === parseInt(smtpId, 10));

    if (smtp.length > 0) {
        return {
            initialValues: smtp.length > 0 ? smtp[0] : {},
        };
    }
    return {};

}

SmtpForm = reduxForm({
    form: 'SmtpForm'
})(SmtpForm);

export default connect(mapStateToProps)(SmtpForm);
