import React from 'react';

const summary = () => {
    return (
        <div>
            <div className="uk-margin-medium-bottom">
                <label className="uk-text-muted">Description</label>
                <textarea cols="30" rows="1" id="border-full" className="md-input"
                          placeholder=""/>
            </div>
            <div className="uk-margin-medium-bottom">
                <label className="uk-text-muted">Work done</label>
                <textarea cols="30" rows="0" id="border-full" className="md-input"
                          placeholder=""/>
            </div>
            <div className="uk-margin-medium-bottom">
                <label className="uk-text-muted">Add work time</label>
                <input type="text" className="md-input"/>
            </div>
        </div>
    );
};

export default summary;