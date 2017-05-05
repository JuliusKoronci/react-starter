import React, {PropTypes, Component} from 'react';
import Flatpickr from 'react-flatpickr';

// const Datepicker = ({taskId, value, action, fieldName, label, icon, formInputChangeHandler}) => {
class Datepicker extends Component {

    componentDidUpdate(prevProps) {

        if(prevProps!==this.props) {
            if (this.props.value === '') {
                this.flatpicker.flatpickr.clear();
                this.flatpicker.value = '';
            }
        }

    }

    render() {
        const {label,value,fieldName,action,formInputChangeHandler,icon}=this.props;
        const ic = icon || '&#xE858;';

        return (
        <div className="uk-input-group" style={{marginTop: '20px'}}>
            <span className="uk-input-group-addon"><i className="material-icons">{ic}</i></span>
            <label className="uk-text-muted" htmlFor="uk_dp_1">{label}</label>
            <Flatpickr className="md-input" data-enable-time value={value}
                       ref={(fp) => {
                           this.flatpicker = fp;
                       }}
                       onChange={(v) => {
                           // action({[fieldName]: v[0]}, taskId)
                           action(fieldName, v[0])
                       }}/>
            <span onClick={formInputChangeHandler.bind(null, fieldName, '')}>X Clear</span>
        </div>
        );
    };

};

Datepicker.propTypes = {
    // taskId: PropTypes.number.isRequired,
    // value: PropTypes.string || PropTypes.date,
    action: PropTypes.func.isRequired,
    fieldName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string
};

export default Datepicker;