import React, {PropTypes} from 'react';

const add_imap = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Add IMAP</h1>
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
                        <a className="md-btn md-btn-primary alignright" href="settings_units.html">Save</a>
                        <a className="md-btn md-btn-success alignright" href="settings_units.html">Test connection</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

add_imap.propTypes = {
    prop: PropTypes.object.isRequired
};

export default add_imap;
