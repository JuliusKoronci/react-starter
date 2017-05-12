import React, {PropTypes, Component} from 'react';
import {Creatable} from 'react-select';

class Tagger extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {values: {}};
    }

    componentDidUpdate() {

        console.log('input value',this.props.input.value);
        // this.setState({
        //     values:this.props.input.value?(this.props.input.value.split(',').map(option => {
        //         return {
        //             value: option,
        //             label: option
        //         }
        // })):{}
        // });
    }

    onChange = (values) => {
        // this.props.input.onChange(values);
        // console.log('tagger on change ', values);
        let newValue = values.map(value => {
            return value.value;
        }).join();
        // console.log('new value',newValue);
        //this.props.input.value+','+value.value;
        this.props.input.onChange(newValue);
    };

    newOptionClick = (value) => {
        // console.log('new option click ', value);
        let newValue = (this.props.input.value?this.props.input.value+',':'') +value.value;
        // console.log(this.props.input.value);
        // console.log(newValue);
        this.props.input.onChange(newValue);
    };
    //
    // onSetValues = (values) => {
    //     console.log('on set values:', values);
    // };
    //
    // selectValue = (value) => {
    //     console.log('select value: ', value);
    // };

    render() {

        const values = this.props.input.value.split(',').map(value => {
            return {
                value: value,
                label: value
            }
        });

        return (
            <div>
                <input type="hidden" value={this.props.input.value} name={this.props.input.name} {...this.props.input}/>
                <label htmlFor={this.props.input.name}>{this.props.label}</label>
                <Creatable
                    className="md-input"
                    //value={this.props.tagValues}
                    value={values}

                    /*
                     options={this.props.input.value.split(',').map(option => {
                     return {
                     value: option,
                     label: option
                     }})}
                     */

                    joinValues={true}
                    multi={true}
                    onChange={ this.onChange }
                    onBlurResetsInput={false}


                    //onInputChange={ this.onChange }

                    /*
                     {...this.props.input}


                     options={['option1','option2'].map(option => {
                     return {
                     value: option,
                     label: option
                     }
                     })}
                     */


                    // setValues={(values) => {
                    //     console.log('set vals');
                    //     this.onSetValues(values);
                    // }}

                    onNewOptionClick={this.newOptionClick}
                    selectValue={this.selectValue}
                />
            </div>
        );
    }
}

Tagger.propTypes = {
    fieldName: PropTypes.string,
    defaultValue: PropTypes.string
};

export default Tagger;