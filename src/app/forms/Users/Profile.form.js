import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {required, phone, alphanum, number} from '../../../config/validation';
import {availableLanguages} from '../../../config/config';
import {renderField, renderRTE, renderWswg, renderSelect} from '../field.tpl';
import {LOAD_ATTACHMENT} from '../../../api/urls';
import RTE from '../../forms/general/rte/RTE.form';
import Image from '../../components/Main/Image';
import {Link} from 'react-router';



class ProfileForm extends Component {

    render() {
        const {handleSubmit, handleFileUpload, formError, user} = this.props;

        return (

            <div className="md-card">

                <div className="md-card-content max-width-1000px">
                    <form onSubmit={handleSubmit}>

                    <div className="user_heading_avatar fileinput fileinput-new" data-provides="fileinput">
                        <div className="fileinput-new thumbnail">
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
                        <h1 className="heading_b uk-margin-bottom">Edit profile</h1>
                    </div>
                    <hr/>
                    <div className="uk-margin-top">
                        <h3 className="full_width_in_card heading_c">
                            General info
                        </h3>
                        <div className="uk-grid" data-uk-grid-margin>
                            <div className="uk-width-medium-1-2 uk-margin-bottom">

                                <Field name="username" type="text" validate={[required]} component={renderField}
                                                                label="User name"/>

                            </div>


                            <div className="uk-width-medium-1-2 uk-margin-bottom">

                                <Field name="detailData.function" type="text" validate={[]} component={renderField}
                                       label="User position"/>

                            </div>
                            <div className="uk-width-medium-1-2 uk-margin-bottom">

                                <Field name="detailData.name" type="text" validate={[required]} component={renderField}
                                       label="First name"/>

                            </div>
                            <div className="uk-width-medium-1-2 uk-margin-bottom">

                                <Field name="detailData.surname" type="text" validate={[required]} component={renderField}
                                       label="Surname"/>

                            </div>
                        </div>
                        <div className="uk-grid">
                            <div className="uk-width-1-1">


                                <Field name="detailData.signature" type="text" validate={[required]} component={renderWswg}
                                label="Signature"/>

                                {/*<div className="uk-form-row">*/}
                                    {/*<RTE fieldName="detailData.signature" label="Signature" defaultValue={user.detailData.signature} />*/}
                                {/*</div>*/}


                            </div>
                        </div>
                        <h3 className="full_width_in_card heading_c">
                            Languages
                        </h3>
                        <div className="uk-grid" data-uk-grid-margin>
                            <div className="uk-width-1-1">

                                <Field name="language" validate={[]} component={renderSelect}
                                       label="Language" options={availableLanguages} />


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
                                        <Field name="email" type="text" validate={[required]} component={renderField}
                                               label="Email"/>
                                    </div>

                                    <div className="uk-input-group uk-margin-bottom">
                                                                <span className="uk-input-group-addon">
                                                                    <i className="md-list-addon-icon material-icons">
                                                                        &#xE0CD;</i>
                                                                </span>
                                        <Field name="detailData.tel" type="text" validate={[]} component={renderField}
                                               label="Phone number"/>
                                    </div>

                                    <div>
                                        <div className="uk-input-group uk-margin-bottom">
                                                                <span className="uk-input-group-addon">
                                                                    <i className="md-list-addon-icon uk-icon-facebook-official" />
                                                                </span>


                                            <Field name="detailData.facebook" type="text" validate={[required]} component={renderField}
                                                   label="Facebook"/>

                                        </div>
                                    </div>

                                    <div className="uk-input-group uk-margin-bottom">
                                                                <span className="uk-input-group-addon">
                                                                    <i className="md-list-addon-icon uk-icon-twitter" />
                                                                </span>
                                        <Field name="detailData.twitter" type="text" validate={[required]} component={renderField}
                                               label="Twitter"/>
                                    </div>


                                    <div className="uk-input-group uk-margin-bottom">
                                                                <span className="uk-input-group-addon">
                                                                    <i className="md-list-addon-icon uk-icon-linkedin" />
                                                                </span>
                                        <Field name="detailData.linkdin" type="text" validate={[required]} component={renderField}
                                               label="Linkedin"/>
                                    </div>


                                    <div className="uk-input-group uk-margin-bottom">
                                                                <span className="uk-input-group-addon">
                                                                    <i className="md-list-addon-icon uk-icon-google-plus" />
                                                                </span>
                                        <Field name="detailData.google" type="text" validate={[required]} component={renderField}
                                               label="Google+"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="uk-grid-margin">
                            <Link className="md-btn md-btn-danger" to="/">Cancel</Link>

                            <button className="md-btn md-btn-primary alignright" type="submit">SAVE</button>

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
                                <Link className="md-btn md-btn-danger" to="/">Cancel</Link>
                                <a className="md-btn md-btn-primary alignright" href="#">Change password</a>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>

            </div>

        );

    }
}


function mapStateToProps(state, ownProps) {

        return {
            initialValues: state.profile.data,
        };

}

ProfileForm = reduxForm({
    form: 'ProfileForm'
})(ProfileForm);

export default connect(mapStateToProps)(ProfileForm);

