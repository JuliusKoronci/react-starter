import React, {Component} from 'react';
import Select from 'react-select';
import DatePicker from '../../forms/Task/Datepicker.form';
import Multicheckbox from '../../forms/general/Multicheckbox.form';

class CustomAttributeInput extends Component {

    constructor(props, context) {
        super(props, context);
    }

    onChange = (value) => {
        this.props.action(this.props.name, value)
    };

    formInputChangeHandler=(name, value)=>{
      this.onChange(value);
    };


    render() {

        const {value, type, title, customAttribute} = this.props;

        let input = type;


        //textovy input
        const textInputs = ['input', 'decimal_number', 'integer_number'];
        if (textInputs.indexOf(type) !== -1) {
            input = <input type="text" name={name} onChange={e => {
                this.onChange(e.target.value)
            }} value={value}/>;
        }
        //textarea
        if (type === 'text_area') {
            input = <textarea name={name} onChange={e => {
                this.onChange(e.target.value)
            }} value={value}/>;
        }
        //simple select
        if (type === 'simple_select') {

            console.log(customAttribute)

            input =
                <Select label={title}
                        icon="&#xE2C8;"
                        defaultValue={value}
                        options={customAttribute.options}
                        value={value}
                        action={(e) => {
                            this.onChange(e.target.value)
                        }}
                />
        }
        //multiselect
        if (type === 'multi_select') {
            input = <Select label={title}
                            icon="&#xE7FD;"

                            defaultValue={value}
                            // options={customAttribute.options}
                            options={[]}
                            action={(e) => {
                                this.onChange(e.target.value)
                            }}/>

        }
        //date
        if (type === 'date') {
            input = <DatePicker action={this.formInputChangeHandler} value={value}
                                fieldName={name} label={title} icon="&#xE858;" formInputChangeHandler={this.formInputChangeHandler} />
        }
        //checkbox
        if (type === 'checkbox') {
            //input='-------';
            input = <Multicheckbox action={this.formInputChangeHandler} value={value} options={customAttribute.options}
                name={name} label={title} formInputChangeHandler={this.formInputChangeHandler} />;
        }


        return (
            <div className="uk-input-group" style={{marginTop: '20px'}}>

                <span className="uk-input-group-addon"><i className="material-icons"/></span>
                <label className="uk-text-muted">{title}</label>

                {/*<h3>{title} {this.props.name} {type}</h3>*/}
                {/*<h4>{value}</h4>*/}
                <div style={{border: '1px silver solid'}}>
                    {input}
                </div>
            </div>
        );
    }
}

export default CustomAttributeInput;