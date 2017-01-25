import React from 'react';

const tag = () => {
    return (
        <div className="uk-input-group" style={{marginTop: '10px'}}>
            <span className="uk-input-group-addon"><i className="material-icons">&#xE893;</i></span>
            <label className="uk-text-muted">Tag</label>
            <select id="select_demo_1" className="md-input">
                <option value="">Add tag...</option>
                <option value="a">Tag 1</option>
                <option value="b">Tag 2</option>
                <option value="c">Tag 3</option>
            </select>
        </div>
    );
};

export default tag;