import React, {PropTypes, Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {required, minLength5} from '../../../config/validation';
import {renderField} from '../field.tpl';


class LoginForm extends Component {
    render() {
        const {handleSubmit, loginError} = this.props;
        return (
            <div className="login_page_wrapper">
                <div className="md-card" id="login_card">
                    <div className="md-card-content large-padding" id="login_form">
                        <div className="login_heading">
                            <div className="user_avatar"></div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <Field name="username" type="text" validate={[required, minLength5]} component={renderField}
                                   label="Username"/>
                            <Field name="password" type="password" validate={[required, minLength5]}
                                   component={renderField} label="Password"/>
                            <div className="uk-margin-medium-top">
                                <div className="uk-text-danger">{loginError}</div>
                            </div>
                            <div className="uk-margin-medium-top">
                                <button className="md-btn md-btn-primary md-btn-block md-btn-large" type="submit">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="uk-margin-top uk-text-center">
                    <a href="#" id="signup_form_show">Need help?</a>
                </div>
            </div>
        );
    }
}

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

LoginForm = reduxForm({
    form: 'loginForm'
})(LoginForm);


export default LoginForm;