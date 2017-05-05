import React, {PropTypes, Component} from 'react';

class Multicheckbox extends Component {

    constructor(props, context) {
        super(props, context);
        this.state={inputValue:''};
    }


    // componentWillMount(){
    //     console.log('will mount');
    // }

    componentDidUpdate(prevProps) {
        if (this.state.inputValue !== this.props.value) {
            this.setState({
                inputValue: this.props.value
            });
        }
    }


    onChange = (value, e) => {
        // let inputValue = this.props.input.value;
        // if (typeof inputValue === 'string' || inputValue instanceof String) {
        //     inputValue.split(',');
        //     if (!Array.isArray(inputValue)) {
        //         inputValue = [];
        //     }
        // }
        // let newValue = inputValue;
        // if (e.target.checked) {
        //     newValue.push(value);
        // } else {
        //     let index = inputValue.indexOf(value);
        //     if (index > -1) {
        //         inputValue.splice(index, 1);
        //     }
        // }
        // this.setState({inputValue: newValue});
        // this.props.onChange(newValue);
    };



    render() {

        const {name, label}=this.props;
        // let inputValue = this.state.inputValue;
        let inputValue = '';
        let options=this.props.options;
        options=[];


        return (
            <div>
                <input type="text" value={inputValue} name={name}
                       // onChange={this.props.formInputChangeHandler.bind(null,inputValue)}
                />

                <label htmlFor={name}>{label}</label>

                {options.map((option, i) => {

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