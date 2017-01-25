import React from 'react';

const company = () => {
    return (
        <div className="uk-input-group" style={{marginTop: '20px'}}>
            <span className="uk-input-group-addon"><i className="material-icons">&#xE7EE;</i></span>
            <label className="uk-text-muted">Company</label>
            <select id="select_demo_1" className="md-input">
                <option value="">Select company...</option>
                <option value="a">Company 1</option>
                <option value="b">Company 2</option>
                <option value="c">Company 3</option>
            </select>
        </div>
    );
};

export default company;