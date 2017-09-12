import React, {PropTypes, Component} from 'react';
import Flatpickr from 'react-flatpickr';

// const Datepicker = ({value, action, fieldName, label, icon}) => {
class Datepicker extends Component {

    onChange = (value) => {
        this.props.input.onChange(value[0]);
    };

    componentDidUpdate() {
        if(this.props.value==='') {
            this.flatpicker.flatpickr.clear();
        }
    }

    render() {

        // const ic = this.props.icon || '&#xE858;';
        const value=this.props.value;
        const label=this.props.label;

        return (
            <div className="uk-input-group" style={{marginTop: '20px'}}>

                {/*<span className="uk-input-group-addon"><i className="material-icons">{ic}</i></span>*/}

                <label className="uk-text-muted" htmlFor="uk_dp_1">{label}</label>
                <Flatpickr
                    ref={(fp) => {
                        this.flatpicker = fp;
                    }}
                    className="md-input" data-enable-time value={value}
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
