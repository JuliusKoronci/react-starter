import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {required, phone, alphanum, number} from '../../../config/validation';
import {renderField} from '../field.tpl';
import DeleteButton from '../../components/Main/_partials/DeleteButton';

class UserForm extends Component {



    // componentDidUpdate(){
    //     console.log(this.props.user);
    // }


    render() {
        const {handleSubmit, formError, handleDelete, roles, user} = this.props;
        return (

<div className="md-card">
    <form onSubmit={handleSubmit}>
        <div className="md-card-content">
            <div className="user_heading_avatar fileinput fileinput-new" data-provides="fileinput">
                <div className="fileinput-new thumbnail">
                    <img src="assets/img/avatars/user.png" alt="user avatar"/>
                </div>
                <div className="fileinput-preview fileinput-exists thumbnail"></div>
                <div className="user_avatar_controls">
                                    <span className="btn-file">
                                        <span className="fileinput-new"><i
                                            className="material-icons">&#xE2C6;</i></span>
                                        <span className="fileinput-exists"><i
                                            className="material-icons">&#xE86A;</i></span>
                                        <input type="file" name="user_edit_avatar_control"
                                               id="user_edit_avatar_control"/>
                                    </span>
                    <a href="#" className="btn-file fileinput-exists" data-dismiss="fileinput"><i
                        className="material-icons">&#xE5CD;</i></a>
                </div>
            </div>
            <div className="uk-margin-bottom" data-uk-margin>
                <h1 className="heading_b uk-margin-bottom">Edit user profile</h1>
            </div>
            <hr/>
            <div className="uk-margin-top">
                <h3 className="full_width_in_card heading_c">
                    General info
                </h3>
                <div className="uk-grid" data-uk-grid-margin>
                    <div className="uk-width-medium-1-2 uk-margin-bottom">
                        <Field name="username" type="text" validate={[required]} component={renderField} id="user_edit_username_control" className="md-input" label="User name"/>
                    </div>

                    <div className="uk-width-medium-1-2 uk-margin-bottom">
                        <Field name="detailData.function" type="text" validate={[required]} component={renderField} id="user_edit_function_control" className="md-input" label="User position"/>
                    </div>
                    <div className="uk-width-medium-1-2 uk-margin-bottom">
                        <Field name="detailData.name" type="text" validate={[required]} component={renderField} id="user_edit_name_control" className="md-input" label="First name"/>
                    </div>
                    <div className="uk-width-medium-1-2 uk-margin-bottom">
                        <Field name="detailData.surname" type="text" validate={[required]} component={renderField} id="user_edit_surname_control" className="md-input" label="Surname"/>
                    </div>

                    <div className="uk-width-medium-1-2 uk-margin-bottom">
                        <Field name="company.title" type="text" validate={[required]} component={renderField} id="user_edit_company_control" className="md-input" label="Company"/>
                    </div>
                    <div className="uk-width-medium-1-2 uk-margin-bottom">
                        <label className="uk-text-muted">Role</label>
                        <select className="md-input">
                            {roles.map((role, i) => {
                                return (
                                    <option key={i} value={role.id}>{ role.title }</option>
                                );
                            })}
                        </select>
                    </div>

                </div>
                <div className="uk-grid">
                    <div className="uk-width-1-1">
                        <label>Signature</label>
                                            <textarea className="md-input" name="user_edit_personal_info_control"
                                                      id="user_edit_personal_info_control" cols="30" rows="4">Inventore eveniet consequatur illum officiis facilis non blanditiis debitis dignissimos ipsa cumque similique et sint quo minima enim provident aspernatur delectus non possimus repellat omnis ut voluptatum quaerat voluptatum corporis fugit nihil numquam consequatur deserunt est consequuntur voluptatibus quia est sed non a debitis ut laudantium eaque unde.</textarea>
                    </div>
                </div>
                <h3 className="full_width_in_card heading_c">
                    Languages
                </h3>
                <div className="uk-grid" data-uk-grid-margin>
                    <div className="uk-width-1-1">
                        <select id="user_edit_languages" className="md-input">
                            <option value="gb" selected>English</option>
                            <option value="pl">Slovak</option>
                            <option value="fr">French</option>
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
                                <label>Email</label>
                                <input type="text" className="md-input" name="user_edit_email"
                                       value="milan.bauch@hotmail.com"/>
                            </div>

                            <div className="uk-input-group uk-margin-bottom">
                                                            <span className="uk-input-group-addon">
                                                                <i className="md-list-addon-icon material-icons">
                                                                    &#xE0CD;</i>
                                                            </span>
                                <label>Phone Number</label>
                                <input type="text" className="md-input" name="user_edit_phone"
                                       value="1-236-879-2171x5473"/>
                            </div>

                            <div>
                                <div className="uk-input-group uk-margin-bottom">
                                                            <span className="uk-input-group-addon">
                                                                <i className="md-list-addon-icon uk-icon-facebook-official"></i>
                                                            </span>
                                    <label>Facebook</label>
                                    <input type="text" className="md-input"
                                           name="user_edit_facebook"
                                           value="facebook.com/envato"/>
                                </div>
                            </div>

                            <div className="uk-input-group uk-margin-bottom">
                                                            <span className="uk-input-group-addon">
                                                                <i className="md-list-addon-icon uk-icon-twitter"></i>
                                                            </span>
                                <label>Twitter</label>
                                <input type="text" className="md-input" name="user_edit_twitter"
                                       value="twitter.com/envato"/>
                            </div>


                            <div className="uk-input-group uk-margin-bottom">
                                                            <span className="uk-input-group-addon">
                                                                <i className="md-list-addon-icon uk-icon-linkedin"></i>
                                                            </span>
                                <label>Linkdin</label>
                                <input type="text" className="md-input" name="user_edit_linkdin"
                                       value="linkedin.com/company/envato"/>
                            </div>


                            <div className="uk-input-group uk-margin-bottom">
                                                            <span className="uk-input-group-addon">
                                                                <i className="md-list-addon-icon uk-icon-google-plus"></i>
                                                            </span>
                                <label>Google+</label>
                                <input type="text" className="md-input"
                                       name="user_edit_google_plus"
                                       value="plus.google.com/+envato/about"/>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="full_width_in_card heading_c">
                    Custom user fields
                </h3>
                <div className="uk-grid-margin">
                    <a className="md-btn md-btn-danger" href="#">Cancel</a>
                    <button type="submit" className="md-btn md-btn-primary alignright" href="#">Save</button>
                </div>
                <div className="uk-grid-margin">
                    <h3 className="full_width_in_card heading_c">
                        Password reset
                    </h3>
                </div>
                <div className="uk-grid-margin">
                    <div className="uk-width-1-1">
                        <div className="uk-grid-margin">
                            <label>Old password</label>
                            <input type="text" className="md-input"/>
                        </div>
                        <div className="uk-grid-margin">
                            <label>New password</label>
                            <input type="text" className="md-input"/>
                        </div>
                        <div className="uk-grid-margin">
                            <label>Repeat new password</label>
                            <input type="text" className="md-input"/>
                        </div>
                    </div>
                    <div className="uk-grid-margin">
                        <a className="md-btn md-btn-danger" href="#">Cancel</a>
                        <a className="md-btn md-btn-primary alignright" href="#">Change password</a>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>

            // <div className="md-card">
            //     <div className="md-card-content">
            //         <div className="uk-margin-bottom" data-uk-margin>
            //             <h1 className="heading_b uk-margin-bottom">{this.props.heading}</h1>
            //         </div>
            //         <hr/>
            //         <div className="uk-grid">
            //             <div className="uk-width-medium-1-2">
            //                 <form onSubmit={handleSubmit}>

            //                     <Field name="is_active" type="checkbox" validate={[]} component={renderField}
            //                            label="Active"/>

            //                     <Field name="title" type="text" validate={[required]} component={renderField}
            //                            label="user name"/>

            //                     <Field name="ico" type="text" validate={[number]} component={renderField}
            //                            label="ICO"/>

            //                     <Field name="dic" type="text" validate={[number]} component={renderField}
            //                            label="DIC"/>

            //                     <Field name="ic_dph" type="text" validate={[alphanum]} component={renderField}
            //                            label="IC DPH"/>

            //                     <Field name="phone" type="text" validate={[phone]} component={renderField}
            //                            label="Phone"/>

            //                     <Field name="street" type="text" validate={[]} component={renderField}
            //                            label="Street"/>

            //                     <Field name="city" type="text" validate={[]} component={renderField}
            //                            label="City"/>

            //                     <Field name="psc" type="text" validate={[alphanum]} component={renderField}
            //                            label="PSC"/>

            //                     <Field name="country" type="text" validate={[]} component={renderField}
            //                            label="Country"/>


            //                     <div className="uk-margin-medium-top">
            //                         <div className="uk-text-danger">{formError}</div>
            //                     </div>
            //                     <div className="uk-margin-medium-top">

            //                         {this.props.params.userId && <DeleteButton handleDelete={handleDelete}
            //                                                                       id={parseInt(this.props.params.userId, 10)}/>}

            //                         <button className="md-btn md-btn-primary alignright" type="submit">
            //                             SAVE
            //                         </button>
            //                     </div>
            //                 </form>
            //             </div>
            //         </div>
            //     </div>
            // </div>


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

