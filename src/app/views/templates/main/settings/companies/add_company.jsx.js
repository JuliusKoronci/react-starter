import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const add_company = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Add company</h1>
                </div>
                <hr/>
                <div className="uk-width-medium-1-2">
                    <div className="uk-margin-bottom">
                        <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1"
                               data-md-icheck/>
                        <label className="uk_dp1 uk-text-muted">Active</label>
                    </div>
                    <div className="uk-margin-bottom">
                        <label>Company name</label>
                        <input type="text" className="md-input label-fixed" />
                    </div>
                    <div className="uk-margin-bottom">
                        <label>ICO</label>
                        <input type="text" className="md-input label-fixed"/>
                    </div>
                    <div className="uk-margin-bottom">
                        <label>DIC</label>
                        <input type="text" className="md-input label-fixed"/>
                    </div>
                    <div className="uk-margin-bottom">
                        <label>IC DPH</label>
                        <input type="text" className="md-input label-fixed"/>
                    </div>
                    <div className="uk-margin-bottom">
                        <label>Phone</label>
                        <input type="text" className="md-input label-fixed"/>
                    </div>
                    <div className="uk-margin-bottom">
                        <label>Street</label>
                        <input type="text" className="md-input label-fixed"/>
                    </div>
                    <div className="uk-margin-bottom">
                        <label>City</label>
                        <input type="text" className="md-input label-fixed"/>
                    </div>
                    <div className="uk-margin-bottom">
                        <label>PSC</label>
                        <input type="text" className="md-input label-fixed"/>
                    </div>
                    <div className="uk-margin-bottom">
                        <label>Country</label>
                        <input type="text" className="md-input label-fixed"/>
                    </div>

                    <h3 className="full_width_in_card heading_c uk-margin-bottom">
                        Custom company fields
                    </h3>
                    <a className="md-btn md-btn-danger" href="#">Delete</a>
                    <a className="md-btn md-btn-primary alignright" href="settings_user.html">Save</a>
                </div>

            </div>
        </div>
    );
};

add_company.propTypes = {
    prop: PropTypes.object.isRequired
};

export default add_company;
