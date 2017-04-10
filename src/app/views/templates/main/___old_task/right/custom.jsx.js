import React from 'react';

const custom = () => {
    return (
        <div>
            <div className="" style={{marginTop: '20px'}}>
                <label className="uk-text-muted">Custom text area 1</label>
                <textarea cols="30" rows="1" className="md-input label-fixed" placeholder=""/>
            </div>
            <div className="" style={{marginTop: '20px'}}>
                <label className="uk-text-muted">Custom select 1</label>
                <select className="md-input">
                    <option value="">Select custom</option>
                    <option value="a">Custom 1</option>
                    <option value="b">Custom 2</option>
                    <option value="c">Custom 3</option>
                </select>
            </div>
            <div style={{marginTop: '20px'}}>
                <label className="uk-text-muted">Custom Input 1</label>
                <input type="text" className="md-input "/>
            </div>
        </div>
    );
};

export default custom;