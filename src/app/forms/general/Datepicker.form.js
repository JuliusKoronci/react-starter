import React, {PropTypes} from 'react';
import Flatpickr from 'react-flatpickr';

const Datepicker = ({value, action, fieldName, label, icon}) => {
    const ic = icon || '&#xE858;';
    return (
        <div className="uk-input-group" style={{marginTop: '20px'}}>

            {/*<span className="uk-input-group-addon"><i className="material-icons">{ic}</i></span>*/}

            <label className="uk-text-muted" htmlFor="uk_dp_1">{label}</label>
            <Flatpickr className="md-input" data-enable-time value={value}
                       onChange={(v)=>{}}
            />
        </div>
    );
};

/*
 onChange={(v) => {
 action(
 {
 [fieldName]: v[0]
 }
 )
 }}
*/

Datepicker.propTypes = {
    value: PropTypes.string,
    // action: PropTypes.func.isRequired,
    // fieldName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string
};

export default Datepicker;