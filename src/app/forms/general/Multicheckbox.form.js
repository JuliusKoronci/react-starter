import React, {PropTypes, Component} from 'react';

class Multicheckbox extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {inputValue: []};
    }

    componentDidUpdate() {
        console.log('did update');
        if(this.state.inputValue!=this.props.input.value) {
            this.setState({
                inputValue: this.props.input.value
            });
        }
    }

    onChange = (value,e) => {

        let inputValue=this.props.input.value;

        console.log('%c ********************', 'color: green; font-weight: bold;');
        console.log('input value is ',inputValue);

        if (typeof inputValue === 'string' || inputValue instanceof String){
            inputValue.split(',');
            console.log('was string, spliced, is array? '+Array.isArray(inputValue));
            if(!Array.isArray(inputValue)){
                inputValue=[];
            }
        }


        console.log('checked: '+e.target.checked);
        console.log('clicked on: ' + value);
        console.log('is array? ' + Array.isArray(inputValue));
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


        this.setState({inputValue: newValue});
        this.props.onChange(newValue);
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

        const inputValue=this.state.inputValue;


        return (
            <div>
                {/*<input type="text" value={this.props.input.value} name={this.props.input.name} {...this.props.input} />*/}
                <input type="text" value={inputValue} name={this.props.input.name} onChange={this.props.input.onChange.bind(null,inputValue)} />
                <label htmlFor={this.props.input.name}>{this.props.label}</label>


                {this.props.options.map((option, i) => {

                const fieldName = 'acls_' + option;
                const checked=Array.isArray(inputValue) && inputValue.indexOf(option)!=-1;


                return (
                <div key={i}>
                <label >
                <input name={fieldName} type="checkbox" value={option} onChange={this.onChange.bind(null,option)}
                label={option} onClick={this.checkClick} checked={checked} />
                {option} {checked} isarray? {Array.isArray(inputValue)?'is array':'isnt array'}
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