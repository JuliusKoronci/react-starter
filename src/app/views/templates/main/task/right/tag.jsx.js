import React from 'react';
import { Creatable } from 'react-select';

const tag = ({tagValues,setValues}) => {
    return (
        <div className="uk-input-group" style={{marginTop: '10px'}}>
            <span className="uk-input-group-addon"><i className="material-icons">&#xE893;</i></span>
            <label className="uk-text-muted">Tag</label>
            <Creatable name="tags"
                       className="md-input"
                       value={tagValues}
                       joinValues={true}
                       multi={true}
                       options={[
                           {value: 'one', label: 'One'},
                           {value: 'two', label: 'Two'}
                       ]}
                       onChange={setValues}
            />
        </div>
    );
};

export default tag;