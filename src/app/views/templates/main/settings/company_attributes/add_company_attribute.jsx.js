import React, {PropTypes} from 'react';


const add_company_attribute = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Add company attribute</h1>
                </div>
                <hr/>
                <div className="uk-width-medium-1-2">
                    <div className="uk-margin">
                        <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1"
                               data-md-icheck/>
                        <label className="uk_dp1 uk-text-muted">Active</label>
                    </div>
                    <div className="uk-margin">
                        <label>Company custom field name</label>
                        <input type="text" className="md-input label-fixed"/>
                    </div>
                    <div className="uk-margin">
                        <label>Description</label>
                        <input type="text" className="md-input label-fixed"/>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-text-muted">Type</label>
                        <select id="select_demo_1" className="md-input">
                            <option value="" disabled selected hidden>Select custom field type</option>
                            <option value="a">Input</option>
                            <option value="b">Text area</option>
                            <option value="c">Select</option>
                            <option value="c">Checkbox</option>
                            <option value="c">Date</option>
                            <option value="c">Number</option>
                        </select>
                    </div>

                    <h2>Add custom field value</h2>
                    <div className="uk-margin">
                        <label>Value</label>
                        <input type="text" className="md-input label-fixed uk-margin-bottom"/>
                        <a className="md-btn md-btn-primary" href="#">ADD</a>
                    </div>
                    <div className="uk-margin">
                        <a className="md-btn md-btn-danger" href="#">Delete</a>
                        <a className="md-btn md-btn-primary alignright" href="settings_roles.html">Save</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

add_company_attribute.propTypes = {
    prop: PropTypes.object.isRequired
};

export default add_company_attribute;
