import React from 'react';
import RTE from '../forms/general/rte/RTE.form';

export const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div className="uk-form-row">
        <label htmlFor={input.name}>{label}</label>
        <input className="md-input" {...input} type={type}/>
        {touched && ((error && <span className="uk-text-danger">{error}</span>) || (warning && <span className="uk-text-warning">{warning}</span>))}
    </div>
);


export const renderRTE = ({input, label, type, meta: {touched, error, warning}}) => (
    <div className="uk-form-row">
        <RTE fieldName={input.name} label={label} {...input}  />
        {touched && ((error && <span className="uk-text-danger">{error}</span>) || (warning && <span className="uk-text-warning">{warning}</span>))}
    </div>
);

export const renderTextarea = ({input, label, type, meta: {touched, error, warning}}) => (
    <div className="uk-form-row">
        <label htmlFor={input.name}>{label}</label>
        <textarea {...input} />
        {touched && ((error && <span className="uk-text-danger">{error}</span>) || (warning && <span className="uk-text-warning">{warning}</span>))}
    </div>
);


// export const renderSelect = ({input, label, type, meta: {touched, error, warning}}) => (
//     <div className="uk-form-row">
//         <label htmlFor={input.name}>{label}</label>
//         <select value={defaultValue} onChange={action} className="md-input" {...input}>
//             <option value={false}>Select {label}...</option>
//             {options.map((option, i) => {
//                 return <option key={i} value={option.id}>{option.title}</option>
//             })}
//         </select>
//         {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
//     </div>
// );
//
//
// const Select = ({options, action, defaultValue, label, icon}) => {
//     return (
//     <div className="uk-input-group" style={{marginTop: '20px'}}>
//     <span className="uk-input-group-addon"><i className="material-icons">{icon}</i></span>
//     <label className="uk-text-muted">{label}</label>
//     <select value={defaultValue} onChange={action} className="md-input">
//     <option value={false}>Select {label}...</option>
//     {options.map((option, i) => {
//         return <option key={i} value={option.id}>{option.title}</option>
//     })}
//     </select>
//     </div>
//     );
// };