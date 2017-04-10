import React, {PropTypes, Component} from 'react';
import Flatpickr from 'react-flatpickr';

// const Datepicker = ({value, action, fieldName, label, icon}) => {
class Datepicker extends Component {

    onChange = (value) => {
        console.log(value);
        this.props.input.onChange(value[0]);
    };


    render() {

        // const ic = this.props.icon || '&#xE858;';
        const value=this.props.value;
        const label=this.props.label;

        return (
            <div className="uk-input-group" style={{marginTop: '20px'}}>

                {/*<span className="uk-input-group-addon"><i className="material-icons">{ic}</i></span>*/}

                <label className="uk-text-muted" htmlFor="uk_dp_1">{label}</label>
                <Flatpickr className="md-input" data-enable-time value={value}
                           onChange={this.onChange.bind(null)}
                />
            </div>
        );
    };
}

Datepicker.propTypes = {
    // value: PropTypes.string,
    // action: PropTypes.func.isRequired,
    // fieldName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string
};

export default Datepicker;