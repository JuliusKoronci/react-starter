import React, {PropTypes} from 'react';

const add_status = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Add status</h1>
                </div>
                <hr/>
                <div className="uk-width-medium-1-2">
                    <div className="uk-margin-bottom">
                        <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1"
                               data-md-icheck/>
                        <label className="uk_dp1 uk-text-muted">Active</label>
                    </div>
                    <div className="uk-margin-bottom">
                        <label>Status name</label>
                        <input type="text" className="md-input label-fixed"/>
                    </div>
                    <div className="uk-margin-bottom">
                        <label>Description</label>
                        <input type="text" className="md-input label-fixed"/>
                    </div>
                    <div className="uk-margin-bottom">
                        <label>Color</label>
                        <input type="text" className="md-input label-fixed"/>
                    </div>
                    <div className="uk-margin-bottom">
                        <a className="md-btn md-btn-danger" href="#">Delete</a>
                        <a className="md-btn md-btn-primary alignright" href="settings_units.html">Save</a>
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
