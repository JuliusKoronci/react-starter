import React, {PropTypes, Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {required, minLength8} from '../../../config/validation';
import {renderField} from '../field.tpl';


class LoginForm extends Component {
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <Field name="username" type="text" validate={[required, minLength8]} component={renderField} label="Username"/>
                <Field name="password" type="password" validate={[required, minLength8]} component={renderField} label="Password"/>
                <button className="" type="submit">Login</button>
            </form>
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