import React from 'react';

const project = () => {
    return (
        <div className="uk-input-group" style={{marginTop: '20px'}}>
            <span className="uk-input-group-addon"><i className="material-icons">&#xE2C8;</i></span>
            <label className="uk-text-muted">Project</label>
            <select id="select_demo_1" className="md-input">
                <option value="">Select project...</option>
                <option value="a">Project 1</option>
                <option value="b">Project 2</option>
                <option value="c">Project 3</option>
            </select>
        </div>
    );
};

export default project;