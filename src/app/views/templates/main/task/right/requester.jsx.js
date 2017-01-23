import React from 'react';

const requester = () => {
    return (
        <div className="uk-input-group" style={{marginTop: '20px'}}>
            <span className="uk-input-group-addon"><i className="material-icons">&#xE7FD;</i></span>
            <label className="uk-text-muted">Requester</label>
            <select id="select_demo_1" className="md-input">
                <option value="">Select requester...</option>
                <option value="a">Requester 1</option>
                <option value="b">Requester 2</option>
                <option value="c">Requester 3</option>
            </select>
        </div>
    );
};

export default requester;