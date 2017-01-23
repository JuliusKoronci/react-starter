import React from 'react';

const assigned = () => {
    return (
        <div className="uk-input-group" style={{marginTop: '20px'}}>
            <span className="uk-input-group-addon"><i className="material-icons">&#xE7FE;</i></span>
            <label className="uk-text-muted">Assigned</label>
            <select id="select_demo_1" className="md-input">
                <option value="">Select assignet...</option>
                <option value="a">Agent 1</option>
                <option value="b">Agent 2</option>
                <option value="c">Agent 3</option>
            </select>
        </div>
    );
};

export default assigned;