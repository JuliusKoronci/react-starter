import React, {PropTypes, Component} from 'react';

class Multicheckbox extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {values: {}};
        console.log('options',props.options);
    }

    componentDidUpdate() {
        console.log('did update');
    }

    onChange = (value,e) => {

        let inputValue=this.props.input.value;
        console.log(e.target.checked);
        console.log(value);
        console.log(Array.isArray(inputValue));
        let newValue=inputValue;
        if(e.target.checked) {
            newValue.push(value);
        }else{
            let index = inputValue.indexOf(value);
            if (index > -1) {
                inputValue.splice(index, 1);
            }
        }
        console.log('new value: '+newValue);
        // this.props.input.onChange(values);
        // let newValue = values.map(value => {
        //     return value.value;
        // }).join();
        // console.log(newValue);
        this.props.input.onChange(newValue);
    };


    render() {

        // if(this.props.input.value && Array.isArray(this.props.input.value)) {
        //     const values = this.props.input.value.map(value => {
        //         return {
        //             value: value,
        //             label: value
        //         }
        //     });
        // }else{
        //     const values={};
        // }





        return (
            <div>
                <input type="text" value={this.props.input.value} name={this.props.input.name} {...this.props.input}/>
                <label htmlFor={this.props.input.name}>{this.props.label}</label>


                {this.props.options.map((option, i) => {

                const fieldName = 'acls_' + option;
                const checked=Array.isArray(this.props.input.value) && this.props.input.value.indexOf(option)!=-1;


                return (
                <div key={i}>
                <label >
                <input name={fieldName} type="checkbox" value={option} onChange={this.onChange.bind(null,option)}
                label={option} onClick={this.checkClick} checked={checked} />
                {option} {checked} isarray? {Array.isArray(this.props.input.value)?'true':'false'}
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