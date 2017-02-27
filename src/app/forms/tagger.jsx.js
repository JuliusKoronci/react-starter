import React from 'react';
import { Creatable } from 'react-select';

const tag = ({input,tagValues,name,setValues,defaultOptions,label,icon,actions}) => {
    return (
        <div className="uk-input-group" style={{marginTop: '10px'}}>
            {icon && <span className="uk-input-group-addon"><i className="material-icons">&#xE893;</i></span>}
            <label htmlFor={name}>{label}</label>
            <Creatable name={name}
                       className="md-input"
                       value={tagValues}
                       joinValues={true}
                       multi={true}
                       options={defaultOptions}
                       onChange={setValues?setValues:{}}
                       {...input}
            />
        </div>
    );
};

export default tag;