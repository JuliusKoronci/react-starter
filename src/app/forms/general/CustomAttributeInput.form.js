import React, {Component} from 'react';
import Select from 'react-select';
import DatePicker from '../../forms/Task/Datepicker.form';
import Multicheckbox from '../../forms/general/Multicheckbox.form';

class CustomAttributeInput extends Component {

    constructor(props, context) {
        super(props, context);
    }

    onChange = (value) => {
        console.log('on change', value)
        this.props.action(this.props.name, value)
    };

    formInputChangeHandler = (name, value) => {
        this.onChange(value);
    };


    onChangeSimpleSelect = (value) => {
        console.log('on change simple', value);
        this.onChange(value.value);
    };

    onChangeSelect = (value) => {
        console.log('on change multiselect', value);
        // let newValue = (this.props.value?this.props.value+',':'') +value.value;
        // let newValue = (this.props.value?this.props.value+',':'') +value.value;
        // let newValue = (this.props.value?this.props.value.push(value.value):[value.value]);
        let newValue = value.map(val => {
            return val.value
        }).join(',');
        // this.props.action(this.props.name, value.value)
        // this.props.action(this.props.name, newValue)

        this.onChange(newValue);
    };


    onChangeCheck = (e) => {
        // console.log(e.target.checked);
        this.onChange(e.target.checked+'');
    };

    // newOptionClick = (value) => {
    //     alert('click');
    //     let newValue = (this.props.value?this.props.value+',':'') +value.value;
    //     this.onChangeSelect(newValue);
    // };


    render() {


        const {value, type, title, customAttribute} = this.props;

        // console.log(value)
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
                                fieldName={name} label={title} icon="&#xE858;"
                                formInputChangeHandler={this.formInputChangeHandler}/>
        }


        //simple select
        if (type === 'simple_select') {
            console.log(value)
            // console.log(customAttribute)
            let options = customAttribute.options.split(',').map(option => {
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
                        onChange={this.onChangeSimpleSelect}
                    // action={(e) => {alert('sdf');this.onChange(e.target.value)}}
                    // action={alert('sdf')}
                />
        }


        //multiselect
        if (type === 'multi_select') {
            console.log(value)

            let selValue = [];
            if (value) {
                selValue = value.split(',').map(val => {
                    return {value: val, label: val}
                });//{value:value,label:value};
            }
            // console.log('multiselect value',value);
            input = <Select label={title}
                            icon="&#xE7FD;"
                            multi={true}
                            value={selValue}
                            options={
                                customAttribute.options.split(',').map(option => {
                                    return {value: option, label: option}
                                })
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
            input = <input type="checkbox" checked={(value==='true')} name={name} onChange={this.onChangeCheck}/>
        }

        return (
            <div className="uk-input-group" style={{marginTop: '20px'}}>

                <span className="uk-input-group-addon"><i className="material-icons"/></span>
                <label className="uk-text-muted">{title} {customAttribute.id}</label>

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