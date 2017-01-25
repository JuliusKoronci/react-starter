import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const user_form = (prop) => {
    return (
        <div className="md-card">
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
                            <label>User name</label>
                            <input className="md-input" type="text" id="user_edit_uname_control"
                                   name="user_edit_uname_control"/>
                        </div>

                        <div className="uk-width-medium-1-2 uk-margin-bottom">
                            <label>User position</label>
                            <input className="md-input" type="text" id="user_edit_position_control"
                                   name="user_edit_position_control"/>
                        </div>
                        <div className="uk-width-medium-1-2 uk-margin-bottom">
                            <label>Firstname</label>
                            <input className="md-input" type="text" id="user_edit_uname_control"
                                   name="user_edit_uname_control"/>
                        </div>
                        <div className="uk-width-medium-1-2 uk-margin-bottom">
                            <label>Surname</label>
                            <input className="md-input" type="text" id="user_edit_position_control"
                                   name="user_edit_position_control"/>
                        </div>

                        <div className="uk-width-medium-1-2 uk-margin-bottom">
                            <label>Company</label>
                            <input className="md-input" type="text" id="user_edit_position_control"
                                   name="user_edit_position_control"/>
                        </div>
                        <div className="uk-width-medium-1-2 uk-margin-bottom">
                            <label>Role</label>
                            <input className="md-input" type="text" id="user_edit_position_control"
                                   name="user_edit_position_control"/>
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
                        <a className="md-btn md-btn-primary alignright" href="#">Save</a>
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
        </div>
    );
};

user_form.propTypes = {
    prop: PropTypes.object.isRequired
};

export default user_form;
