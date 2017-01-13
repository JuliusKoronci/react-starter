import React from 'react';

export const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div className="uk-form-row">
        <label htmlFor={input.name}>{label}</label>
        <input className="md-input" {...input} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
);