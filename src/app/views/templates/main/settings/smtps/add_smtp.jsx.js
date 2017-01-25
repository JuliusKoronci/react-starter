import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const add_status = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Add SMTP</h1>
                </div>
                <hr/>
                <div className="uk-width-medium-1-2">
                    <div className="uk-margin-bottom">
                        <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1"
                               data-md-icheck/>
                        <label className="uk_dp1 uk-text-muted">Active</label>
                    </div>
                    <div className="uk-margin-bottom">
                        <label>email</label>
                        <input type="text" className="md-input label-fixed"/>
                    </div>
                    <div className="uk-margin-bottom">
                        <label>Server</label>
                        <input type="text" className="md-input label-fixed"/>
                    </div>
                    <div className="uk-margin-bottom">
                        <label>Port</label>
                        <input type="text" className="md-input label-fixed"/>
                    </div>
                    <div className="uk-margin-bottom">
                        <label>Login</label>
                        <input type="text" className="md-input label-fixed"/>
                    </div>
                    <div className="uk-margin-bottom">
                        <label>Password</label>
                        <input type="text" className="md-input label-fixed"/>
                    </div>
                    <div className="uk-margin-bottom">
                        <label>Project folder</label>
                        <input type="text" className="md-input label-fixed" value="from ALL"/>
                    </div>
                    <div className="uk-margin-bottom">
                        <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1"
                               data-md-icheck/>
                        <label className="uk_dp1 uk-text-muted">TSL</label>
                    </div>
                    <div className="uk-margin-bottom">
                        <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1"
                               data-md-icheck/>
                        <label className="uk_dp1 uk-text-muted">SSL</label>
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
                        <a className="md-btn md-btn-danger" href="#">Delete</a>
                        <a className="md-btn md-btn-primary alignright" href="settings_smtps.html">Save</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

add_status.propTypes = {
    prop: PropTypes.object.isRequired
};

export default add_status;
