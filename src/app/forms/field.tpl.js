import React from 'react';
import { Creatable } from 'react-select';

export const renderField = ({input, label, type, actions, meta: {touched, error, warning}}) => (
    <div className="uk-form-row">
        <label htmlFor={input.name}>{label}</label>
        <input className="md-input" {...input} type={type} {...actions} />
        {touched && ((error && <span className="uk-text-danger">{error}</span>) || (warning && <span className="uk-text-warning">{warning}</span>))}
    </div>
);

export const renderSelect = ({input, label, type, options, defaultValue, action, meta: {touched, error, warning}}) => (
    <div className="uk-form-row">
        <label htmlFor={input.name}>{label}</label>
        <select value={defaultValue} onChange={action.bind(null)} onClick={action.bind(null)} className="md-input" {...input}>
            <option value={false}>Select {label}...</option>
            {options.map((option, i) => {
                return <option key={i} value={option.value}>{option.title}</option>
            })}
        </select>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
);

export const renderTagger = ({input,tagValues,name,defaultOptions,label,icon,action,setValues}) => {
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
                       onChange={setValues}
                       {...input}
            />
        </div>
    );
};
