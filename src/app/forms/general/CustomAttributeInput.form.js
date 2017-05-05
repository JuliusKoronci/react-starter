import React, {Component} from 'react';
import Select from 'react-select';
import DatePicker from '../../forms/Task/Datepicker.form';
import Multicheckbox from '../../forms/general/Multicheckbox.form';

class CustomAttributeInput extends Component {

    constructor(props, context) {
        super(props, context);
    }

    onChange = (value) => {
        // console.log('on change',value)
        this.props.action(this.props.name, value)
    };

    formInputChangeHandler=(name, value)=>{
      this.onChange(value);
    };

    onChangeSelect = (value) => {
        // console.log('on change multiselect',value);
        let newValue = (this.props.value?this.props.value+',':'') +value.value;
        // this.props.action(this.props.name, value.value)
        this.props.action(this.props.name, newValue)
    };

    // newOptionClick = (value) => {
    //     alert('click');
    //     let newValue = (this.props.value?this.props.value+',':'') +value.value;
    //     this.onChangeSelect(newValue);
    // };


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
        //date
        if (type === 'date') {
            input = <DatePicker action={this.formInputChangeHandler} value={value}
                                fieldName={name} label={title} icon="&#xE858;" formInputChangeHandler={this.formInputChangeHandler} />
        }





        //simple select
        if (type === 'simple_select') {

            // console.log(customAttribute)
            let options= customAttribute.options.split(',').map(option=>{
                return {value: option, label: option};
            });
            // console.log(options)
            input =
                <Select label={title}
                        icon="&#xE2C8;"
                        defaultValue={value}
                        options={options}
                        value={value}
                        // action={(e) => {this.onChange(e.target.value)}}
                        onChange={this.onChange}
                        // action={(e) => {alert('sdf');this.onChange(e.target.value)}}
                        // action={alert('sdf')}
                />
        }




        //multiselect
        if (type === 'multi_select') {
            // console.log('multiselect value',value);
            input = <Select label={title}
                            icon="&#xE7FD;"
                            value={value}
                            options={
                                customAttribute.options.split(',').map(option=>{return {value: option,label: option}})
                            }
                            onChange={this.onChangeSelect}

                            // action={(e) => {
                            //     this.onChange(e.target.value)
                            //     // alert(e.target.value)
                            // }}

            />
        }

        //checkbox
        if (type === 'checkbox') {
            //input='-------';
            // input = <Multicheckbox action={this.formInputChangeHandler} value={value} options={customAttribute.options}
            //     name={name} label={title} formInputChangeHandler={this.formInputChangeHandler} />;
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