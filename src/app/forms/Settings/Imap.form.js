import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {required, phone, alphanum, number} from '../../../config/validation';
import {renderField} from '../field.tpl';
import DeleteButton from '../../components/Main/_partials/DeleteButton';

class ImapForm extends Component {



    // componentDidUpdate(){
    //     console.log(this.props.company);
    // }


    render() {
        const {handleSubmit, formError, handleDelete, heading} = this.props;
        return (

            <div className="md-card">
                <form onSubmit={handleSubmit}>
                    <div className="md-card-content">
                        <div className="uk-margin-bottom" data-uk-margin>
                            <h1 className="heading_b uk-margin-bottom">{heading}</h1>
                        </div>
                        <hr/>
                        <div className="uk-width-medium-1-2">
                            <div className="uk-margin-bottom">
                                <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1"
                                       data-md-icheck/>
                                <label className="uk_dp1 uk-text-muted">Active</label>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Inbox email</label>
                                <input name="inbox_email" type="text" className="md-input label-fixed"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Move email</label>
                                <input name="move_email" type="text" className="md-input label-fixed"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Server</label>
                                <input name="host" type="text" className="md-input label-fixed"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Port</label>
                                <input name="port" type="text" className="md-input label-fixed"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Login</label>
                                <input name="login" type="text" className="md-input label-fixed"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Password</label>
                                <input name="password" type="text" className="md-input label-fixed"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Project folder</label>
                                <input type="text" className="md-input label-fixed" value="select from projects"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1"
                                       data-md-icheck/>
                                <label className="uk_dp1 uk-text-muted">Ignore certificate</label>
                            </div>
                            <div className="uk-margin-bottom">
                                <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1"
                                       data-md-icheck/>
                                <label className="uk_dp1 uk-text-muted">SSL</label>
                            </div>
                            <div className="uk-margin-bottom">
                                <a className="md-btn md-btn-danger" href="#">Delete</a>
                                <button className="md-btn md-btn-primary alignright" href="settings_units.html">Save</button>
                                <a className="md-btn md-btn-success alignright" href="settings_units.html">Test connection</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


        );
    }
}


function mapStateToProps(state, ownProps) {
    const imapId = ownProps.params.imapId;
    const imap = state.imaps.data.filter((imap) => parseInt(imap.id, 10) === parseInt(imapId, 10));

    if (imap.length > 0) {
        return {
            initialValues: imap.length > 0 ? imap[0] : {},
        };
    }
    return {};

}

ImapForm = reduxForm({
    form: 'imapForm'
})(ImapForm);

export default connect(mapStateToProps)(ImapForm);

