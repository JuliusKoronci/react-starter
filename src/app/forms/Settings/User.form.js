import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {required, email} from '../../../config/validation';
import {renderField, renderWswg, renderSelect} from '../field.tpl';
import {availableLanguages} from '../../../config/config';
import {LOAD_ATTACHMENT} from '../../../api/urls';
import Image from '../../components/Main/Image';
import {Link} from 'react-router';
import {generateRoute} from '../../../config/router';

class UserForm extends Component {


    render() {
        const {handleSubmit, submitData, submitPassword, formError, handleDelete, roles, user, heading, companies, editing, handleFileUpload, } = this.props;
        return (

<div className="md-card">
    <form onSubmit={handleSubmit} autoComplete="off">
        <div className="md-card-content max-width-1000px">
            <div className="user_heading_avatar fileinput fileinput-new" data-provides="fileinput">
                <div className="fileinput-new thumbnail">
                    {/*<img src={ user && user.image? LOAD_ATTACHMENT + '/'+user.image:'assets/img/avatars/user.png'} alt="user avatar"/>*/}
                    <Image src={ user && user.image? LOAD_ATTACHMENT + '/'+user.image:'/assets/img/avatars/user.png'} staticSrc='/assets/img/avatars/user.png' fetchFromApi={!!(user && user.image)} alt="user avatar" />
                </div>
                <div className="fileinput-preview fileinput-exists thumbnail"></div>
                <div className="user_avatar_controls">
                                    <span className="btn-file">
                                        <span className="fileinput-new"><i
                                            className="material-icons">&#xE2C6;</i></span>
                                        <span className="fileinput-exists"><i
                                            className="material-icons">&#xE86A;</i></span>
                                        <input type="file" name="user_edit_avatar_control"
                                               id="user_edit_avatar_control" onChange={handleFileUpload}/>
                                    </span>
                    <a href="#" className="btn-file fileinput-exists" data-dismiss="fileinput"><i
                        className="material-icons">&#xE5CD;</i></a>
                </div>
            </div>
            <div className="uk-margin-bottom" data-uk-margin>
                <h1 className="heading_b uk-margin-bottom">{heading}</h1>
            </div>
            <hr/>
            <div className="uk-margin-top">
                <h3 className="full_width_in_card heading_c">
                    General info
                </h3>
                <div className="uk-margin">
                {editing &&
                <Field name="is_active" type="checkbox" validate={[]} component={renderField}
                       label="Active"/>
                }
                </div>
                <div className="uk-grid" data-uk-grid-margin>
                    <div className="uk-width-medium-1-2 uk-margin-bottom">
                        <Field name="username" type="text" validate={[required]} component={renderField} id="user_edit_username_control" className="md-input" label="Login" autoComplete="off" />
                    </div>

                    <div className="uk-width-medium-1-2 uk-margin-bottom">
                        <Field name="detailData.function" type="text" validate={[]} component={renderField} id="user_edit_function_control" className="md-input" label="User position" autoComplete="off"/>
                    </div>
                    <div className="uk-width-medium-1-2 uk-margin-bottom">
                        <Field name="detailData.name" type="text" validate={[]} component={renderField} id="user_edit_name_control" className="md-input" label="First name" autoComplete="off"/>
                    </div>
                    <div className="uk-width-medium-1-2 uk-margin-bottom">
                        <Field name="detailData.surname" type="text" validate={[]} component={renderField} id="user_edit_surname_control" className="md-input" label="Surname" autoComplete="off"/>
                    </div>

                    <div className="uk-width-medium-1-2 uk-margin-bottom">

                        <Field name="company.id" validate={[required]} component={renderSelect} label="Company"
                               options={companies.map((company, i) => {return({id:company.id,title:company.title})})} />

                    </div>
                    <div className="uk-width-medium-1-2 uk-margin-bottom">
                        <Field name="user_role.id" validate={[required]} component={renderSelect} label="Role"
                               options={roles.map((role, i) => {return({id:role.id,title:role.title})})} />
                    </div>

                </div>
                <div className="uk-grid">
                    <div className="uk-width-1-1">

                        <Field name="detailData.signature" className="md-input" type="text" validate={[]} component={renderWswg}
                               label="Signature" autoComplete="off" />
                    </div>
                </div>

                {!editing &&
                <div className="uk-grid">
                    <div className="uk-width-1-1">

                        <Field name="password" className="md-input" type="password" validate={[required]} component={renderField}
                               label="Initial password"/>
                    </div>
                </div>}


                <h3 className="full_width_in_card heading_c">
                    Languages
                </h3>
                <div className="uk-grid" data-uk-grid-margin>
                    <div className="uk-width-1-1">
                        <select name="language" id="user_edit_languages" className="md-input">
                            {availableLanguages.map((lang, i) => {
                                return (
                                    <option key={i} value={lang.id}>{ lang.title }</option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <h3 className="full_width_in_card heading_c">
                    Contact info
                </h3>
                <div className="uk-grid">
                    <div className="uk-width-1-1">
                        <div className="uk-grid uk-grid-width-1-1 uk-grid-width-large-1-2"
                             data-uk-grid-margin>

                            <div className="uk-input-group uk-margin-bottom">
                                <span className="uk-input-group-addon">
                                    <i className="md-list-addon-icon material-icons">
                                        &#xE158;</i>
                                </span>
                                <Field name="email" type="text" validate={[required, email]} component={renderField} id="user_edit_email_control" className="md-input" label="Email"/>
                            </div>

                            <div className="uk-input-group uk-margin-bottom">
                                <span className="uk-input-group-addon">
                                    <i className="md-list-addon-icon material-icons">
                                        &#xE0CD;</i>
                                </span>
                                <Field name="detailData.tel" type="text" validate={[]} component={renderField} id="user_edit_phone_control" className="md-input" label="Phone Number"/>
                            </div>

                            <div>
                                <div className="uk-input-group uk-margin-bottom">
                                    <span className="uk-input-group-addon">
                                        <i className="md-list-addon-icon uk-icon-facebook-official" />
                                    </span>
                                    <Field name="detailData.facebook" type="text" validate={[]} component={renderField} id="user_edit_facebook_control" className="md-input" label="Facebook"/>
                                </div>
                            </div>

                            <div className="uk-input-group uk-margin-bottom">
                                <span className="uk-input-group-addon">
                                    <i className="md-list-addon-icon uk-icon-twitter"/>
                                </span>
                                <Field name="detailData.twitter" type="text" validate={[]} component={renderField} id="user_edit_twitter_control" className="md-input" label="Twitter"/>
                            </div>


                            <div className="uk-input-group uk-margin-bottom">
                                <span className="uk-input-group-addon">
                                    <i className="md-list-addon-icon uk-icon-linkedin"/>
                                </span>
                                <Field name="detailData.linkdin" type="text" validate={[]} component={renderField} id="user_edit_linkedin_control" className="md-input" label="Linkedin"/>
                            </div>


                            <div className="uk-input-group uk-margin-bottom">
                                <span className="uk-input-group-addon">
                                    <i className="md-list-addon-icon uk-icon-google-plus"/>
                                </span>
                                <Field name="detailData.google" type="text" validate={[]} component={renderField} id="user_edit_linkedin_control" className="md-input" label="Google"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<h3 className="full_width_in_card heading_c">*/}
                    {/*User attributes*/}
                {/*</h3>*/}
                <div className="uk-grid-margin">
                    <Link className="md-btn md-btn-danger" to={generateRoute('users')}>Cancel</Link>
                    <button type="submit" className="md-btn md-btn-primary alignright" href="#">Save</button>
                </div>
            </div>
        </div>
    </form>

    {/*<form onSubmit={submitPassword}>*/}
        <div className="md-card-content max-width-1000px">
            <div className="uk-grid-margin">
                <h3 className="full_width_in_card heading_c">
                    Password reset
                </h3>
            </div>
            <div className="uk-grid-margin">
                <div className="uk-width-1-1">
                    <div className="uk-grid-margin">
                        {/*<Field name="old_password" type="text" validate={[required]} component={renderField} id="user_edit_linkedin_control" className="md-input" label="Old password"/>*/}
                    </div>
                    <div className="uk-grid-margin">
                        {/*<Field name="password" type="text" validate={[required]} component={renderField} id="user_edit_linkedin_control" className="md-input" label="New password"/>*/}
                    </div>
                    <div className="uk-grid-margin">
                        {/*<Field name="repeat_password" type="text" validate={[required]} component={renderField} id="user_edit_linkedin_control" className="md-input" label="Repeat new password"/>*/}
                    </div>
                </div>
                <div className="uk-grid-margin">
                    <Link className="md-btn md-btn-danger" to={generateRoute('users')}>Cancel</Link>
                    <button type="submit" className="md-btn md-btn-primary alignright" href="#">Change password</button>
                </div>
            </div>
        </div>
    {/*</form>*/}
</div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    const userId = ownProps.params.userId;
    const user = state.users.data.filter((user) => parseInt(user.id, 10) === parseInt(userId, 10));
    // console.log(user);
    if (user.length > 0) {
        return {
            initialValues: user.length > 0 ? user[0] : {},
        };
    }
    return {};

}

UserForm = reduxForm({
    form: 'UserForm'
})(UserForm);

export default connect(mapStateToProps)(UserForm);

