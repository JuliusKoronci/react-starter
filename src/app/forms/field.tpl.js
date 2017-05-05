import React from 'react';


import RTE from '../forms/general/rte/RTE.form';
import Tagger from '../forms/general/Tagger.form';
import Colorpicker from '../forms/general/Colorpicker.form';
import Multicheckbox from '../forms/general/MulticheckboxRedux.form';
import Multiselect from '../forms/general/Multiselect.form';
import Datepicker from '../forms/general/Datepicker.form';

export const renderField = ({input, label, type, actions, className, meta: {touched, error, warning}}) => (
    <div className={className?className+ " uk-form-row":'uk-form-row'}>
        <label htmlFor={input.name}>{label}</label>
        <input className="md-input" {...input} type={type} {...actions} {...input.props} />
        {touched && ((error && <span className="uk-text-danger">{error}</span>) || (warning && <span className="uk-text-warning">{warning}</span>))}
    </div>
);




export const renderColorpicker = ({input, label, type, meta: {touched, error, warning}}) => (
    <div className="uk-form-row">
        <label htmlFor={input.name}>{label}</label>
        <Colorpicker input={input}  />
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
        <div>
        <textarea {...input} />
        {touched && ((error && <span className="uk-text-danger">{error}</span>) || (warning && <span className="uk-text-warning">{warning}</span>))}
    </div>
    </div>
);


export const renderSelect = ({input, options, label, action, meta: {touched, error, warning}}) => (
    <div className="uk-form-row">
        <label htmlFor={input.name}>{label}</label>
        {/*<select value={input.defaultValue} className="md-input" {...input} onChange={action.bind(null)} onClick={action.bind(null)} >*/}
        {/*<select value={input.defaultValue} className="md-input" {...input} onChange={(action ? action.bind(null):null)} onClick={(action ? action.bind(null):null)} >/*/}
            <select value={input.defaultValue} className="md-input" {...input} >
            <option value={false}>Select {label}...</option>
            {options.map((option, i) => {
                return <option key={i} value={option.id}>{option.title}</option>
            })}
        </select>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
);


export const renderTagger = ({input,tagValues,defaultOptions,label,icon,action,setValues}) => {

    return (

        <div>
        <Tagger input={input} />
        </div>

    );
};


export const renderMultiselect = ({input,tagValues,defaultOptions,label,icon,action,setValues}) => {

    return (
            <Multiselect input={input} label={label} options={defaultOptions} />
    );
};

export const renderDatepicker = ({input,label,action,setValues}) => {

    return (
        <Datepicker input={input} label={label} {...input} action={action} />
    );
};



export const renderMulticheckbox = ({input, options, label, action, meta: {touched, error, warning}}) => (
    <Multicheckbox {...input} input={input} options={options} />
);


// export const renderSelect = ({input, label, type, options, defaultValue, action, meta: {touched, error, warning}}) => (
// <div className="uk-form-row">
//     <label htmlFor={input.name}>{label}</label>
//     <select value={defaultValue} onChange={action.bind(null)} onClick={action.bind(null)} className="md-input" {...input}>
//         <option value={false}>Select {label}...</option>
//         {options.map((option, i) => {
//             return <option key={i} value={option.value}>{option.title}</option>
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

