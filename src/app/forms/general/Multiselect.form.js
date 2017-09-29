import React, {PropTypes, Component} from 'react';
import Select from 'react-select';

class Multiselect extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {values: {}};
    }

    onChange = (values) => {
        // this.props.input.onChange(values);
        console.log('on change ', values);

        let newValue = values.map(value => {
            return value.value;
        });

        let unique = [...new Set(newValue)].join();

        //this.props.input.value+','+value.value;
        this.props.input.onChange(unique);
    };

    newOptionClick = (value) => {
        console.log('new option click ', value);
        let newValue = this.props.input.value?this.props.input.value+ ',':'' + value.value;
        this.props.input.onChange(newValue);
    };

    onSetValues = (values) => {
        console.log('on set values:', values);
    };

    selectValue = (value) => {
        console.log('select value: ', value);
    };

    render() {
        this.props.input.value+='';
        const values = this.props.input.value.split(',').map(value => {
            if(value!=='') {
                let foundLabel=this.props.options.filter((option) => parseInt(option.value,10) === parseInt(value,10));
                let label=foundLabel && foundLabel[0] && foundLabel[0]['label']?foundLabel[0]['label']:value;
                return {
                    value,
                    label
                }
            }
            return null;
        });



        return (
            <div>
                <input type="hidden" value={this.props.input.value} name={this.props.input.name} {...this.props.input}/>
                <label htmlFor={this.props.input.name}>{this.props.label}</label>
                <Select
                    className="md-input"
                    value={values}

                    isOptionUnique={true}
                    joinValues={true}
                    multi={true}
                    onChange={ this.onChange }
                    onBlurResetsInput={false}
                    //onInputChange={ this.onChange }

                    options={
                        this.props.options || []
                    }

                    setValues={(values) => {
                        console.log('set vals');
                        this.onSetValues(values);
                    }}

                    onNewOptionClick={this.newOptionClick}
                    selectValue={this.selectValue}
                />
            </div>
        );
    }
}

Multiselect.propTypes = {
    fieldName: PropTypes.string,
    defaultValue: PropTypes.string
};

export default Multiselect;