import React, {PropTypes} from 'react';

const Select = ({options, action, defaultValue, label, icon}) => {
    return (
        <div className="uk-input-group" style={{marginTop: '20px'}}>
            <span className="uk-input-group-addon"><i className="material-icons">{icon}</i></span>
            <label className="uk-text-muted">{label}</label>
            <select value={defaultValue} onChange={action} className="md-input">
                <option value={false}>Select {label}...</option>
                {options.map((option, i) => {
                    return <option key={i} value={option.id}>{option.title}</option>
                })}
            </select>
        </div>
    );
};

Select.propTypes = {
    options: PropTypes.array.isRequired,
    action: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    // defaultValue: PropTypes.oneOfType([
    //     React.PropTypes.string,
    //     React.PropTypes.number
    // ]).isRequired,
    className: PropTypes.string,
};


export default Select;