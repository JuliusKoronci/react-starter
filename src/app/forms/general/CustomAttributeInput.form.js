import React, {PropTypes, Component} from 'react';
import Select from 'react-select';

class CustomAttributeInput extends Component {

    constructor(props, context) {
        super(props, context);


    }

    onChange = (value) => {
        this.props.action(this.props.name,value)
    };


    render() {


        {/*// Types of attributes used f.i. in Company attributes, Task attributes*/}
        {/*const INPUT = 'input';*/}
        {/*const DECIMAL_NUMBER = 'decimal_number';*/}
        {/*const INTEGER_NUMBER = 'integer_number';*/}
        {/*const TEXT_AREA = 'text_area';*/}


        {/*const SIMPLE_SELECT = 'simple_select';*/}
        {/*const MULTI_SELECT = 'multi_select';*/}
        {/*const DATE = 'date';*/}
        {/*const CHECKBOX = 'checkbox';*/}


        const {value,type}=this.props;

        let input='no input';

        //textovy input
        const textInputs=['input','decimal_number','integer_number'];
        if(textInputs.indexOf(type) !== -1){
            input=<input type="text" name={name} onChange={e=>{this.onChange(e.target.value)}} value={value} />;
        }
        //textarea
        if(type==='text_area'){
            input=<textarea name={name} onChange={e=>{this.onChange(e.target.value)}} value={value} />;
        }



        return (
            <div>
                <h3>{this.props.name} {this.props.type}</h3>
                <h4>{this.props.value}</h4>
                <div style={{border:'1px red solid'}}>

                    {input}

                </div>
            </div>
        );
    }
}

CustomAttributeInput.propTypes = {
    fieldName: PropTypes.string,
    defaultValue: PropTypes.string
};

export default CustomAttributeInput;