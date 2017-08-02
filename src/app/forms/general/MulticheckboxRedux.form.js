import React, {PropTypes, Component} from 'react';

class Multicheckbox extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {inputValue: this.props.value?this.props.value:[]};
    }


    componentDidUpdate() {

        if (this.state.inputValue !== this.props.input.value) {
            this.setState({
                inputValue: this.props.input.value
            });
        }
    }

    onChange = (value, e) => {
        let inputValue = this.props.input.value;
        if (typeof inputValue === 'string' || inputValue instanceof String) {
            inputValue.split(',');
            if (!Array.isArray(inputValue)) {
                inputValue = [];
            }
        }
        let newValue = inputValue;
        if (e.target.checked) {
            newValue.push(value);
        } else {
            let index = inputValue.indexOf(value);
            if (index > -1) {
                inputValue.splice(index, 1);
            }
        }
        this.setState({inputValue: newValue});
        this.props.onChange(newValue);
    };


    render() {

        const inputValue = this.state.inputValue;

        return (
            <div>
                <input type="hidden" value={inputValue} name={this.props.input.name}
                       onChange={this.props.input.onChange.bind(null, inputValue)}/>
                <label htmlFor={this.props.input.name}>{this.props.label}</label>


                {this.props.options.map((option, i) => {

                    const fieldName = 'acls_' + option;
                    const checked = Array.isArray(inputValue) && inputValue.indexOf(option) !== -1;

                    return (
                        <div key={i}>
                            <label >
                                <input name={fieldName} type="checkbox" value={option}
                                       onChange={this.onChange.bind(null, option)}
                                       label={option} onClick={this.checkClick} checked={checked}/>
                                {option}
                            </label>
                        </div>
                    )
                })
                }

            </div>
        );
    }
}

Multicheckbox.propTypes = {
    fieldName: PropTypes.string,
    defaultValue: PropTypes.string
};

export default Multicheckbox;